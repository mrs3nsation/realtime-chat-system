import axios from "axios";
import { User, Conversation, Message, ApiResponse, AuthResponse } from "../types";

const apiBase = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL: apiBase,
  withCredentials: true,
});

let accessToken: string | null = localStorage.getItem("accessToken");

export function setAccessToken(token: string | null) {
  accessToken = token;
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
}

export function getAccessToken(): string | null {
  return accessToken;
}

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Auto refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (
      err.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/login") &&
      !originalRequest.url?.includes("/auth/register") &&
      !originalRequest.url?.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;
      try {
        const refreshRes = await axios.post<ApiResponse<AuthResponse>>(
          "/api/auth/refresh",
          {},
          { withCredentials: true }
        );
        if (refreshRes.data?.data?.accessToken) {
          setAccessToken(refreshRes.data.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${refreshRes.data.data.accessToken}`;
          return api(originalRequest);
        }
      } catch {
        setAccessToken(null);
      }
    }
    return Promise.reject(err);
  }
);

export const authApi = {
  async register(data: { email: string; password: string; name?: string }): Promise<AuthResponse> {
    const res = await api.post<ApiResponse<AuthResponse>>("/auth/register", data);
    return res.data.data;
  },

  async login(data: { email: string; password: string }): Promise<AuthResponse> {
    const res = await api.post<ApiResponse<AuthResponse>>("/auth/login", data);
    return res.data.data;
  },

  async refresh(): Promise<AuthResponse> {
    const res = await api.post<ApiResponse<AuthResponse>>("/auth/refresh");
    return res.data.data;
  },

  async logout(): Promise<void> {
    await api.post("/auth/logout");
    setAccessToken(null);
  },

  async verifyEmail(token: string): Promise<string> {
    const res = await api.get<ApiResponse<{ message: string }>>(`/auth/verify-email?token=${encodeURIComponent(token)}`);
    return res.data.data.message;
  },

  async resendVerification(email: string): Promise<string> {
    const res = await api.post<ApiResponse<{ message: string }>>("/auth/resend-verification", { email });
    return res.data.data.message;
  },
};

export const userApi = {
  async getMe(): Promise<User> {
    const res = await api.get<ApiResponse<User>>("/users/me");
    return res.data.data;
  },

  async updateProfile(data: { name?: string; avatarUrl?: string }): Promise<User> {
    const res = await api.patch<ApiResponse<User>>("/users/me", data);
    return res.data.data;
  },

  async changePassword(data: { currentPassword: string; newPassword: string }): Promise<string> {
    const res = await api.patch<ApiResponse<{ message: string }>>("/users/me/password", data);
    return res.data.data.message;
  },

  async searchUsers(query?: string): Promise<User[]> {
    const res = await api.get<ApiResponse<User[]>>(`/users${query ? `?query=${encodeURIComponent(query)}` : ""}`);
    return res.data.data;
  },
};

export const conversationApi = {
  async list(): Promise<Conversation[]> {
    const res = await api.get<ApiResponse<Conversation[]>>("/conversations");
    return res.data.data;
  },

  async createDirect(recipientId: string): Promise<Conversation> {
    const res = await api.post<ApiResponse<Conversation>>("/conversations/direct", { recipientId });
    return res.data.data;
  },

  async createGroup(name: string, memberIds: string[]): Promise<Conversation> {
    const res = await api.post<ApiResponse<Conversation>>("/conversations/group", { name, memberIds });
    return res.data.data;
  },

  async get(conversationId: string): Promise<Conversation> {
    const res = await api.get<ApiResponse<Conversation>>(`/conversations/${conversationId}`);
    return res.data.data;
  },

  async addMember(conversationId: string, userId: string): Promise<void> {
    await api.post(`/conversations/${conversationId}/members`, { userId });
  },

  async removeMember(conversationId: string, userId: string): Promise<void> {
    await api.delete(`/conversations/${conversationId}/members/${userId}`);
  },
};

export const messageApi = {
  async getMessages(conversationId: string, cursor?: string, limit = 50): Promise<{ items: Message[]; nextCursor: string | null; hasMore: boolean }> {
    const params = new URLSearchParams();
    if (cursor) params.append("cursor", cursor);
    if (limit) params.append("limit", String(limit));
    const res = await api.get<{ success: boolean; data: Message[]; pagination?: { nextCursor: string | null; hasMore: boolean } }>(
      `/conversations/${conversationId}/messages?${params.toString()}`
    );
    return {
      items: res.data.data || [],
      nextCursor: res.data.pagination?.nextCursor || null,
      hasMore: res.data.pagination?.hasMore || false,
    };
  },

  async sendMessage(conversationId: string, content: string): Promise<Message> {
    const res = await api.post<ApiResponse<Message>>(`/conversations/${conversationId}/messages`, { content });
    return res.data.data;
  },

  async deleteMessage(conversationId: string, messageId: string): Promise<void> {
    await api.delete(`/conversations/${conversationId}/messages/${messageId}`);
  },

  async markRead(conversationId: string, messageIds: string[]): Promise<void> {
    await api.post(`/conversations/${conversationId}/messages/read`, { messageIds });
  },

  async uploadAttachment(messageId: string, file: File): Promise<unknown> {
    const formData = new FormData();
    formData.append("file", file);
    const res = await api.post(`/messages/${messageId}/attachments`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.data;
  },

  getAttachmentUrl(storageKey: string): string {
    return `/api/attachments/${storageKey}`;
  },
};

export default api;
