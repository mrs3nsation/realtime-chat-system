import { io, Socket } from "socket.io-client";
import { Message } from "../types";

class SocketService {
  private socket: Socket | null = null;
  private currentToken: string | null = null;

  public connect(token: string): Socket {
    if (this.socket && this.currentToken === token && this.socket.connected) {
      return this.socket;
    }

    if (this.socket) {
      this.socket.disconnect();
    }

    this.currentToken = token;
    const socketServerUrl = (import.meta.env.VITE_SOCKET_URL as string | undefined) || undefined;
    this.socket = io(socketServerUrl, {
      auth: { token },
      transports: ["websocket", "polling"],
    });

    this.socket.on("connect", () => {
      this.socket?.emit("presence:online");
    });

    return this.socket;
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.currentToken = null;
    }
  }

  public getSocket(): Socket | null {
    return this.socket;
  }

  public joinConversation(conversationId: string) {
    this.socket?.emit("conversation:join", conversationId);
  }

  public leaveConversation(conversationId: string) {
    this.socket?.emit("conversation:leave", conversationId);
  }

  public sendMessage(conversationId: string, content: string, tempId?: string) {
    this.socket?.emit("message:send", { conversationId, content, tempId });
  }

  public markRead(conversationId: string, messageIds: string[]) {
    this.socket?.emit("message:read", { conversationId, messageIds });
  }

  public startTyping(conversationId: string) {
    this.socket?.emit("typing:start", { conversationId });
  }

  public stopTyping(conversationId: string) {
    this.socket?.emit("typing:stop", { conversationId });
  }

  public onNewMessage(callback: (message: Message & { tempId?: string }) => void) {
    this.socket?.on("message:new", callback);
    return () => {
      this.socket?.off("message:new", callback);
    };
  }

  public onReadReceipt(callback: (data: { userId: string; messageIds: string[] }) => void) {
    this.socket?.on("message:read_receipt", callback);
    return () => {
      this.socket?.off("message:read_receipt", callback);
    };
  }

  public onPresenceStatus(callback: (data: { userId: string; status: "online" | "offline" }) => void) {
    this.socket?.on("presence:status", callback);
    return () => {
      this.socket?.off("presence:status", callback);
    };
  }

  public onTypingStart(callback: (data: { userId: string; conversationId: string }) => void) {
    this.socket?.on("typing:start", callback);
    return () => {
      this.socket?.off("typing:start", callback);
    };
  }

  public onTypingStop(callback: (data: { userId: string; conversationId: string }) => void) {
    this.socket?.on("typing:stop", callback);
    return () => {
      this.socket?.off("typing:stop", callback);
    };
  }
}

export const socketService = new SocketService();
