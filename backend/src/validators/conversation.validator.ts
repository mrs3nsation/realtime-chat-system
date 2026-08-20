import { z } from "zod";

export const createDirectConversationSchema = z.object({
  body: z.object({
    recipientId: z.string().uuid(),
  }),
});

export const createGroupConversationSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100),
    memberIds: z.array(z.string().uuid()).min(1).max(99),
  }),
});

export const addMemberSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
  }),
  body: z.object({
    userId: z.string().uuid(),
  }),
});

export const removeMemberSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
    userId: z.string().uuid(),
  }),
});

export const conversationParamSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
  }),
});

export type CreateDirectConversationInput = z.infer<typeof createDirectConversationSchema>["body"];
export type CreateGroupConversationInput = z.infer<typeof createGroupConversationSchema>["body"];
export type AddMemberInput = z.infer<typeof addMemberSchema>["body"];
