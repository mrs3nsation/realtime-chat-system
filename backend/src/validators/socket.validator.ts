import { z } from "zod";

export const socketSendMessageSchema = z.object({
  conversationId: z.string().uuid(),
  content: z.string().min(1).max(10000).optional(),
  tempId: z.string().min(1).optional(),
});

export const socketTypingSchema = z.object({
  conversationId: z.string().uuid(),
});

export const socketMarkReadSchema = z.object({
  conversationId: z.string().uuid(),
  messageIds: z.array(z.string().uuid()).min(1).max(100),
});

export const socketJoinRoomSchema = z.object({
  conversationId: z.string().uuid(),
});

export type SocketSendMessagePayload = z.infer<typeof socketSendMessageSchema>;
export type SocketTypingPayload = z.infer<typeof socketTypingSchema>;
export type SocketMarkReadPayload = z.infer<typeof socketMarkReadSchema>;
export type SocketJoinRoomPayload = z.infer<typeof socketJoinRoomSchema>;
