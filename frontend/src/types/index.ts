export interface User {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export type ConversationRole = 'MEMBER' | 'ADMIN';
export type MessageDeliveryStatus = 'SENT' | 'DELIVERED' | 'READ';

export interface ConversationMember {
  id: string;
  conversationId: string;
  userId: string;
  role: ConversationRole;
  joinedAt: string;
  user: {
    id: string;
    name: string | null;
    email: string;
    avatarUrl: string | null;
  };
}

export interface Attachment {
  id: string;
  messageId: string;
  originalName: string;
  storageKey: string;
  mimeType: string;
  size: number | string;
  createdAt: string;
}

export interface MessageStatus {
  id: string;
  messageId: string;
  userId: string;
  status: MessageDeliveryStatus;
  deliveredAt: string | null;
  readAt: string | null;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string | null;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string | null;
  sender?: {
    id: string;
    name: string | null;
    email: string;
    avatarUrl: string | null;
  };
  attachments?: Attachment[];
  statuses?: MessageStatus[];
  tempId?: string;
}

export interface Conversation {
  id: string;
  name: string | null;
  isGroup: boolean;
  directKey: string | null;
  createdAt: string;
  updatedAt: string;
  members: ConversationMember[];
  messages?: Message[];
  unreadCount?: number;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
}

export type RetroTheme = 'theme-lavender' | 'theme-peach' | 'theme-mint' | 'theme-cyberdark';
