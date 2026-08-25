import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { Conversation, Message } from "../types";
import { conversationApi, messageApi } from "../services/api";
import { socketService } from "../services/socket";
import { useAuth } from "./AuthContext";
import { sound } from "../utils/sound";

interface ChatContextType {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  messages: Message[];
  isLoadingConversations: boolean;
  isLoadingMessages: boolean;
  onlineUserIds: Set<string>;
  typingUserIds: Set<string>;
  selectConversation: (conversationId: string) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  sendAttachment: (file: File, caption?: string) => Promise<void>;
  createDirectConversation: (recipientId: string) => Promise<Conversation>;
  createGroupConversation: (name: string, memberIds: string[]) => Promise<Conversation>;
  refreshConversations: () => Promise<void>;
  startTyping: () => void;
  stopTyping: () => void;
  deleteMessage: (messageId: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoadingConversations, setIsLoadingConversations] = useState<boolean>(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(false);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());
  const [typingMap, setTypingMap] = useState<Record<string, Set<string>>>({});

  const activeConvRef = useRef<Conversation | null>(null);
  activeConvRef.current = activeConversation;

  // In-memory message cache to eliminate chat opening latency
  const messagesCacheRef = useRef<Map<string, Message[]>>(new Map());

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load conversations
  const refreshConversations = useCallback(async () => {
    if (!token) return;
    try {
      setIsLoadingConversations(true);
      const data = await conversationApi.list();
      setConversations(data);

      // Pre-seed cache with last messages from conversations if not already cached
      data.forEach((conv) => {
        if (conv.messages && conv.messages.length > 0 && !messagesCacheRef.current.has(conv.id)) {
          messagesCacheRef.current.set(conv.id, [...conv.messages]);
        }
      });
    } catch (err) {
      console.error("Failed to load conversations:", err);
    } finally {
      setIsLoadingConversations(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      void refreshConversations();
    } else {
      setConversations([]);
      setActiveConversation(null);
      setMessages([]);
      messagesCacheRef.current.clear();
    }
  }, [token, refreshConversations]);

  // Select conversation & load messages with instant cache lookup
  const selectConversation = useCallback(
    async (conversationId: string) => {
      const conv = conversations.find((c) => c.id === conversationId);
      if (conv) {
        setActiveConversation(conv);
      }

      // Check if messages already exist in client cache for INSTANT (0ms) render
      const cached = messagesCacheRef.current.get(conversationId);
      if (cached && cached.length > 0) {
        setMessages(cached);
        setIsLoadingMessages(false);
      } else {
        // Fallback: If conversation has last message snippet, show it optimistically
        if (conv?.messages && conv.messages.length > 0) {
          setMessages([...conv.messages]);
        } else {
          setMessages([]);
        }
        setIsLoadingMessages(true);
      }

      if (activeConvRef.current && activeConvRef.current.id !== conversationId) {
        socketService.leaveConversation(activeConvRef.current.id);
      }

      socketService.joinConversation(conversationId);

      // Revalidate in background to fetch complete message history
      try {
        const { items } = await messageApi.getMessages(conversationId, undefined, 50);
        const chronological = [...items].reverse();
        
        // Update cache & active state
        messagesCacheRef.current.set(conversationId, chronological);
        
        // Only update active messages if user is still on this conversation
        if (activeConvRef.current?.id === conversationId || !activeConvRef.current) {
          setMessages(chronological);
        }

        // Mark unread messages as read asynchronously
        const unreadIds = items
          .filter((m) => m.senderId !== user?.id && !m.statuses?.some((s) => s.userId === user?.id && s.status === "READ"))
          .map((m) => m.id);

        if (unreadIds.length > 0) {
          socketService.markRead(conversationId, unreadIds);
          void messageApi.markRead(conversationId, unreadIds);
        }
      } catch (err) {
        console.error("Failed to load messages:", err);
      } finally {
        setIsLoadingMessages(false);
      }
    },
    [conversations, user?.id]
  );

  // Socket event listeners
  useEffect(() => {
    if (!token) return;

    const unsubMsg = socketService.onNewMessage((newMsg) => {
      // Update cache for the target conversation immediately
      const existingCache = messagesCacheRef.current.get(newMsg.conversationId) || [];
      const updatedCache = [...existingCache.filter((m) => m.id !== newMsg.id && m.tempId !== newMsg.tempId), newMsg];
      messagesCacheRef.current.set(newMsg.conversationId, updatedCache);

      const isCurrentConv = activeConvRef.current?.id === newMsg.conversationId;

      if (isCurrentConv) {
        setMessages((prev) => {
          if (newMsg.tempId) {
            const index = prev.findIndex((m) => m.tempId === newMsg.tempId || m.id === newMsg.id);
            if (index !== -1) {
              const copy = [...prev];
              copy[index] = newMsg;
              return copy;
            }
          }
          if (prev.some((m) => m.id === newMsg.id)) return prev;
          return [...prev, newMsg];
        });

        // Mark read if it's from another user
        if (newMsg.senderId !== user?.id && user?.id) {
          socketService.markRead(newMsg.conversationId, [newMsg.id]);
          sound.playReceive();
        }
      } else {
        if (newMsg.senderId !== user?.id) {
          sound.playReceive();
        }
      }

      // Update conversation list last message
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === newMsg.conversationId) {
            return {
              ...c,
              updatedAt: newMsg.createdAt,
              messages: [newMsg],
            };
          }
          return c;
        })
      );
    });

    const unsubRead = socketService.onReadReceipt(({ messageIds, userId: readerId }) => {
      const updateMsgStatuses = (m: Message) => {
        if (messageIds.includes(m.id)) {
          const updatedStatuses = m.statuses ? [...m.statuses] : [];
          const existingIdx = updatedStatuses.findIndex((s) => s.userId === readerId);
          if (existingIdx !== -1) {
            updatedStatuses[existingIdx] = {
              ...updatedStatuses[existingIdx],
              status: "READ",
              readAt: new Date().toISOString(),
            };
          } else {
            updatedStatuses.push({
              id: `status-${Date.now()}`,
              messageId: m.id,
              userId: readerId,
              status: "READ",
              deliveredAt: null,
              readAt: new Date().toISOString(),
            });
          }
          return { ...m, statuses: updatedStatuses };
        }
        return m;
      };

      // Update active state
      setMessages((prev) => prev.map(updateMsgStatuses));

      // Also update caches
      messagesCacheRef.current.forEach((cachedMsgs, convId) => {
        messagesCacheRef.current.set(convId, cachedMsgs.map(updateMsgStatuses));
      });
    });

    const unsubPresence = socketService.onPresenceStatus(({ userId, status }) => {
      setOnlineUserIds((prev) => {
        const next = new Set(prev);
        if (status === "online") {
          next.add(userId);
        } else {
          next.delete(userId);
        }
        return next;
      });
    });

    const unsubTypingStart = socketService.onTypingStart(({ userId, conversationId }) => {
      if (userId === user?.id) return;
      setTypingMap((prev) => {
        const currentSet = new Set(prev[conversationId] || []);
        currentSet.add(userId);
        return { ...prev, [conversationId]: currentSet };
      });
    });

    const unsubTypingStop = socketService.onTypingStop(({ userId, conversationId }) => {
      if (userId === user?.id) return;
      setTypingMap((prev) => {
        const currentSet = new Set(prev[conversationId] || []);
        currentSet.delete(userId);
        return { ...prev, [conversationId]: currentSet };
      });
    });

    return () => {
      unsubMsg();
      unsubRead();
      unsubPresence();
      unsubTypingStart();
      unsubTypingStop();
    };
  }, [token, user?.id]);

  // Send message
  const sendMessage = async (content: string) => {
    if (!activeConversation || !content.trim() || !user) return;

    const tempId = `temp-${Date.now()}`;
    const optimisticMessage: Message = {
      id: tempId,
      tempId,
      conversationId: activeConversation.id,
      senderId: user.id,
      content: content.trim(),
      createdAt: new Date().toISOString(),
      sender: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
    };

    setMessages((prev) => {
      const next = [...prev, optimisticMessage];
      messagesCacheRef.current.set(activeConversation.id, next);
      return next;
    });
    sound.playSend();

    try {
      socketService.sendMessage(activeConversation.id, content.trim(), tempId);
    } catch {
      // Fallback to HTTP
      const saved = await messageApi.sendMessage(activeConversation.id, content.trim());
      setMessages((prev) => {
        const next = prev.map((m) => (m.tempId === tempId ? saved : m));
        messagesCacheRef.current.set(activeConversation.id, next);
        return next;
      });
    }
  };

  // Send attachment
  const sendAttachment = async (file: File, caption?: string) => {
    if (!activeConversation || !user) return;

    const initialContent = caption || `Attached: ${file.name}`;
    const message = await messageApi.sendMessage(activeConversation.id, initialContent);
    await messageApi.uploadAttachment(message.id, file);

    // Refresh messages
    const { items } = await messageApi.getMessages(activeConversation.id, undefined, 50);
    const chronological = [...items].reverse();
    messagesCacheRef.current.set(activeConversation.id, chronological);
    setMessages(chronological);
    sound.playSend();
  };

  // Create direct conversation
  const createDirectConversation = async (recipientId: string) => {
    const conv = await conversationApi.createDirect(recipientId);
    await refreshConversations();
    await selectConversation(conv.id);
    return conv;
  };

  // Create group conversation
  const createGroupConversation = async (name: string, memberIds: string[]) => {
    const conv = await conversationApi.createGroup(name, memberIds);
    await refreshConversations();
    await selectConversation(conv.id);
    return conv;
  };

  // Delete message
  const deleteMessage = async (messageId: string) => {
    if (!activeConversation) return;
    await messageApi.deleteMessage(activeConversation.id, messageId);
    setMessages((prev) => {
      const next = prev.filter((m) => m.id !== messageId);
      messagesCacheRef.current.set(activeConversation.id, next);
      return next;
    });
  };

  // Typing indicators
  const startTyping = () => {
    if (!activeConversation) return;
    socketService.startTyping(activeConversation.id);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 3000);
  };

  const stopTyping = () => {
    if (!activeConversation) return;
    socketService.stopTyping(activeConversation.id);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
  };

  const activeTypingUserIds: Set<string> = activeConversation
    ? typingMap[activeConversation.id] || new Set<string>()
    : new Set<string>();

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversation,
        messages,
        isLoadingConversations,
        isLoadingMessages,
        onlineUserIds,
        typingUserIds: activeTypingUserIds,
        selectConversation,
        sendMessage,
        sendAttachment,
        createDirectConversation,
        createGroupConversation,
        refreshConversations,
        startTyping,
        stopTyping,
        deleteMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export function useChat(): ChatContextType {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return ctx;
}
