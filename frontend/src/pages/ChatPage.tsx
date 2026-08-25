import React, { useState, useRef, useEffect } from "react";
import { RetroWindow } from "../components/common/RetroWindow";
import {
  RetroMailIcon,
  RetroFolderIcon,
  RetroSmileyIcon,
  RetroFloppyIcon,
  RetroSparkleIcon,
} from "../components/common/RetroIcons";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import { sound } from "../utils/sound";
import { NewChatModal } from "../components/chat/NewChatModal";
import { NewGroupModal } from "../components/chat/NewGroupModal";
import { ProfileModal } from "../components/chat/ProfileModal";
import { messageApi } from "../services/api";

export const ChatPage: React.FC = () => {
  const { user } = useAuth();
  const {
    conversations,
    activeConversation,
    messages,
    isLoadingConversations,
    isLoadingMessages,
    onlineUserIds,
    typingUserIds,
    selectConversation,
    sendMessage,
    sendAttachment,
    startTyping,
    stopTyping,
  } = useChat();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"all" | "direct" | "groups" | "online">("all");
  const [inputText, setInputText] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  // Modals
  const [showNewChatModal, setShowNewChatModal] = useState<boolean>(false);
  const [showNewGroupModal, setShowNewGroupModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  // File input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingUserIds]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isSending || !activeConversation) return;

    try {
      setIsSending(true);
      const text = inputText;
      setInputText("");
      stopTyping();
      await sendMessage(text);
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    startTyping();
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !activeConversation) return;

    const file = files[0];
    try {
      sound.playClick();
      await sendAttachment(file);
    } catch (err) {
      console.error("Failed to upload attachment:", err);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleInsertEmoji = (emoji: string) => {
    sound.playClick();
    setInputText((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  // Helper to format timestamps
  const formatMessageTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  };

  // Helper to get other user in direct conversation
  const getOtherMember = (conv: typeof activeConversation) => {
    if (!conv) return null;
    return conv.members.find((m) => m.userId !== user?.id)?.user || null;
  };

  // Filter conversations
  const filteredConversations = conversations.filter((c) => {
    if (activeTab === "direct" && c.isGroup) return false;
    if (activeTab === "groups" && !c.isGroup) return false;
    if (searchQuery.trim()) {
      const name = c.isGroup ? c.name || "Group" : getOtherMember(c)?.name || getOtherMember(c)?.email || "";
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const emojis = ["😀", "😎", "👾", "❤️", "🔥", "✨", "🌸", "👍", "🚀", "💾", "⚡", "🎉"];

  return (
    <div
      style={{
        height: "calc(100vh - 48px)",
        padding: "16px",
        display: "flex",
        gap: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SIDEBAR: DIRECTORY & CONVERSATIONS */}
      <div
        style={{
          width: 340,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <RetroWindow
          title="Directory & Folders"
          icon={<RetroFolderIcon size={18} />}
          headerColor="yellow"
          className="h-full"
          style={{ height: "100%" }}
        >
          <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
            {/* Quick Action Buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <button
                type="button"
                className="retro-btn retro-btn-sm retro-btn-teal"
                onClick={() => {
                  sound.playClick();
                  setShowNewChatModal(true);
                }}
              >
                <span>+ New DM</span>
              </button>
              <button
                type="button"
                className="retro-btn retro-btn-sm retro-btn-purple"
                onClick={() => {
                  sound.playClick();
                  setShowNewGroupModal(true);
                }}
              >
                <span>+ Channel</span>
              </button>
            </div>

            {/* Retro Search Bar */}
            <div className="retro-search-container">
              <div className="retro-search-icon">🔍</div>
              <input
                type="text"
                className="retro-search-input"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: "flex",
                borderBottom: "2px solid var(--border-dark)",
                backgroundColor: "var(--window-subtle)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {(["all", "direct", "groups"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab);
                  }}
                  style={{
                    flex: 1,
                    padding: "6px 0",
                    border: "none",
                    borderRight: tab !== "groups" ? "1.5px solid var(--border-dark)" : "none",
                    background: activeTab === tab ? "var(--window-bg)" : "transparent",
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {tab === "all" ? "All" : tab === "direct" ? "DMs" : "Channels"}
                </button>
              ))}
            </div>

            {/* Conversation List */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                border: "2px solid var(--border-dark)",
                borderRadius: 4,
                backgroundColor: "var(--window-subtle)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {isLoadingConversations ? (
                <div style={{ padding: 24, textAlign: "center", fontFamily: "var(--font-arcade)", fontSize: "1.1rem", color: "var(--text-muted)" }}>
                  Loading channels...
                </div>
              ) : filteredConversations.length === 0 ? (
                <div style={{ padding: 24, textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  No chats found. Click <strong>+ Channel</strong> to start chatting!
                </div>
              ) : (
                filteredConversations.map((conv) => {
                  const isSelected = activeConversation?.id === conv.id;
                  const otherUser = getOtherMember(conv);
                  const title = conv.isGroup ? conv.name || "Group Channel" : otherUser?.name || otherUser?.email?.split("@")[0] || "Chat";
                  const isOnline = otherUser ? onlineUserIds.has(otherUser.id) : false;
                  const lastMessage = conv.messages && conv.messages.length > 0 ? conv.messages[0] : null;

                  return (
                    <div
                      key={conv.id}
                      onClick={() => {
                        sound.playClick();
                        void selectConversation(conv.id);
                      }}
                      style={{
                        padding: "10px 12px",
                        borderBottom: "1.5px solid var(--border-subtle)",
                        backgroundColor: isSelected ? "var(--card-bg-selected)" : "var(--card-bg)",
                        color: "var(--text-primary)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        transition: "background-color 0.1s",
                      }}
                    >
                      {/* Avatar */}
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: conv.isGroup ? "#a55eea" : "#48c9b0",
                            border: "1.5px solid var(--border-dark)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            fontSize: 14,
                            color: "#fff",
                            overflow: "hidden",
                          }}
                        >
                          {conv.isGroup ? (
                            "👥"
                          ) : otherUser?.avatarUrl ? (
                            <img src={otherUser.avatarUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          ) : (
                            title[0].toUpperCase()
                          )}
                        </div>
                        {!conv.isGroup && (
                          <span
                            className={`status-dot ${isOnline ? "online" : "offline"}`}
                            style={{ position: "absolute", bottom: 0, right: 0 }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              color: "var(--text-primary)",
                            }}
                          >
                            {title}
                          </span>
                          {lastMessage && (
                            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                              {formatMessageTime(lastMessage.createdAt)}
                            </span>
                          )}
                        </div>

                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-secondary)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginTop: 2,
                          }}
                        >
                          {lastMessage ? lastMessage.content || "Attached file" : "No messages yet"}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </RetroWindow>
      </div>

      {/* RIGHT MAIN CHAT WINDOW */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {activeConversation ? (
          <RetroWindow
            title={
              activeConversation.isGroup
                ? `Channel: ${activeConversation.name || "Group"}`
                : `Chat with: ${getOtherMember(activeConversation)?.name || getOtherMember(activeConversation)?.email?.split("@")[0] || "User"}`
            }
            icon={activeConversation.isGroup ? <RetroFolderIcon size={18} /> : <RetroMailIcon size={18} />}
            headerColor={activeConversation.isGroup ? "purple" : "orange"}
            style={{ height: "100%" }}
          >
            {/* Chat Body */}
            <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
              {/* Message Stream */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  backgroundColor: "var(--window-subtle)",
                }}
              >
                {isLoadingMessages ? (
                  <div style={{ textAlign: "center", padding: 32, fontFamily: "var(--font-arcade)", fontSize: "1.2rem", color: "var(--text-muted)" }}>
                    Loading message history...
                  </div>
                ) : messages.length === 0 ? (
                  <div
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      backgroundColor: "var(--card-bg)",
                      border: "2px solid var(--border-dark)",
                      borderRadius: 8,
                      padding: "20px 24px",
                      boxShadow: "var(--retro-shadow-sm)",
                    }}
                  >
                    <RetroSparkleIcon size={32} color="#ff8552" />
                    <h3 style={{ fontFamily: "var(--font-retro)", marginTop: 8, color: "var(--text-primary)" }}>Channel Initialized</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: 4 }}>
                      Send the first message to start conversation!
                    </p>
                  </div>
                ) : (
                  messages.map((msg) => {
                    const isMe = msg.senderId === user?.id;
                    const senderName = isMe ? "You" : msg.sender?.name || msg.sender?.email?.split("@")[0] || "User";
                    const isRead = msg.statuses?.some((s) => s.userId !== user?.id && s.status === "READ");

                    return (
                      <div
                        key={msg.id}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: isMe ? "flex-end" : "flex-start",
                        }}
                      >
                        {/* Sender Label for Group Chats */}
                        {!isMe && activeConversation.isGroup && (
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: 2, marginLeft: 4 }}>
                            {senderName}
                          </span>
                        )}

                        {/* Speech Bubble */}
                        <div className={`chat-bubble ${isMe ? "outgoing" : "incoming"}`}>
                          {msg.content && <div>{msg.content}</div>}

                          {/* Attachment Rendering */}
                          {msg.attachments && msg.attachments.length > 0 && (
                            <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                              {msg.attachments.map((att) => {
                                const isImage = att.mimeType.startsWith("image/");
                                const fileUrl = messageApi.getAttachmentUrl(att.storageKey);

                                if (isImage) {
                                  return (
                                    <div
                                      key={att.id}
                                      style={{
                                        border: "2px solid var(--border-dark)",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        backgroundColor: "var(--card-bg)",
                                        padding: 4,
                                        maxWidth: 240,
                                      }}
                                    >
                                      <img
                                        src={fileUrl}
                                        alt={att.originalName}
                                        style={{ width: "100%", height: "auto", display: "block", borderRadius: 2 }}
                                      />
                                      <div style={{ fontSize: "0.7rem", marginTop: 4, color: "var(--text-muted)" }}>
                                        {att.originalName}
                                      </div>
                                    </div>
                                  );
                                }

                                return (
                                  <a
                                    key={att.id}
                                    href={fileUrl}
                                    download={att.originalName}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 8,
                                      padding: "6px 10px",
                                      border: "1.5px solid var(--border-dark)",
                                      borderRadius: 4,
                                      backgroundColor: "var(--card-bg)",
                                      textDecoration: "none",
                                      color: "var(--text-primary)",
                                      fontSize: "0.8rem",
                                      fontWeight: 600,
                                    }}
                                  >
                                    <RetroFloppyIcon size={18} />
                                    <span>{att.originalName}</span>
                                  </a>
                                );
                              })}
                            </div>
                          )}

                          {/* Message Footer: Time + Read Receipts */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-end",
                              gap: 4,
                              fontSize: "0.7rem",
                              color: "var(--bubble-meta)",
                              marginTop: 4,
                            }}
                          >
                            <span>{formatMessageTime(msg.createdAt)}</span>
                            {isMe && (
                              <span style={{ fontWeight: 800, color: isRead ? "#20bf6b" : "var(--bubble-meta)" }}>
                                {isRead ? "✓✓" : "✓"}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}

                {/* Typing Indicator */}
                {typingUserIds.size > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      className="chat-bubble incoming"
                      style={{
                        padding: "6px 12px",
                        fontSize: "0.8rem",
                        fontStyle: "italic",
                        color: "var(--text-muted)",
                      }}
                    >
                      <span className="animate-pulse">✍️ Someone is typing...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Bottom Message Composer */}
              <div
                style={{
                  padding: "12px 16px",
                  borderTop: "2.5px solid var(--border-dark)",
                  backgroundColor: "var(--window-bg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  position: "relative",
                }}
              >
                {/* Emoji Quick Picker Popup */}
                {showEmojiPicker && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 64,
                      left: 16,
                      backgroundColor: "var(--card-bg)",
                      border: "2px solid var(--border-dark)",
                      borderRadius: 6,
                      padding: 8,
                      display: "grid",
                      gridTemplateColumns: "repeat(6, 1fr)",
                      gap: 6,
                      boxShadow: "var(--retro-shadow)",
                      zIndex: 20,
                    }}
                  >
                    {emojis.map((emoji, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleInsertEmoji(emoji)}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "1.2rem",
                          cursor: "pointer",
                          padding: 4,
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSendMessage} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* File Upload Hidden Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />

                  {/* Attachment Button */}
                  <button
                    type="button"
                    className="retro-btn retro-btn-sm"
                    title="Send File / Photo"
                    onClick={() => {
                      sound.playClick();
                      fileInputRef.current?.click();
                    }}
                    style={{ padding: "8px 10px" }}
                  >
                    📎
                  </button>

                  {/* Emoji Button */}
                  <button
                    type="button"
                    className="retro-btn retro-btn-sm"
                    title="Insert Emoji"
                    onClick={() => {
                      sound.playClick();
                      setShowEmojiPicker((prev) => !prev);
                    }}
                    style={{ padding: "8px 10px" }}
                  >
                    <RetroSmileyIcon size={16} />
                  </button>

                  {/* Main Text Input */}
                  <input
                    type="text"
                    className="retro-input"
                    placeholder="Type message and press Enter..."
                    value={inputText}
                    onChange={handleInputChange}
                    style={{ flex: 1 }}
                  />

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="retro-btn retro-btn-orange"
                    disabled={isSending || !inputText.trim()}
                    style={{ padding: "8px 18px", fontSize: "0.95rem" }}
                  >
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </RetroWindow>
        ) : (
          /* Empty State Window */
          <RetroWindow
            title="CyberChat 98 - Mainframe"
            icon={<RetroSparkleIcon size={18} />}
            headerColor="teal"
            style={{ height: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: 32,
                textAlign: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#ffeaa7",
                  color: "#1e1b18",
                  border: "2.5px solid var(--border-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--retro-shadow)",
                }}
              >
                <RetroMailIcon size={34} />
              </div>

              <div>
                <h2 style={{ fontFamily: "var(--font-retro)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  NO ACTIVE CHANNEL SELECTED
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: 4, maxWidth: 380 }}>
                  Select a direct message or channel from the directory on the left, or launch a new conversation below.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="button"
                  className="retro-btn retro-btn-teal"
                  onClick={() => {
                    sound.playClick();
                    setShowNewChatModal(true);
                  }}
                >
                  <span>+ Start Direct Message</span>
                </button>
                <button
                  type="button"
                  className="retro-btn retro-btn-purple"
                  onClick={() => {
                    sound.playClick();
                    setShowNewGroupModal(true);
                  }}
                >
                  <span>+ Create Channel</span>
                </button>
              </div>
            </div>
          </RetroWindow>
        )}
      </div>

      {/* Modals */}
      <NewChatModal isOpen={showNewChatModal} onClose={() => setShowNewChatModal(false)} />
      <NewGroupModal isOpen={showNewGroupModal} onClose={() => setShowNewGroupModal(false)} />
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </div>
  );
};
