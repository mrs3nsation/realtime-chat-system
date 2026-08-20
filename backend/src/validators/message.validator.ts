import { z } from "zod";

export const sendMessageSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
  }),
  body: z.object({
    content: z.string().min(1).max(10000).optional(),
  }),
});

export const getMessagesSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
  }),
  query: z.object({
    cursor: z.string().optional(),
    limit: z.coerce.number().int().min(1).max(50).default(20),
  }),
});

export const messageParamSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
    messageId: z.string().uuid(),
  }),
});

export const markReadSchema = z.object({
  params: z.object({
    conversationId: z.string().uuid(),
  }),
  body: z.object({
    messageIds: z.array(z.string().uuid()).min(1).max(100),
  }),
});

export type SendMessageInput = z.infer<typeof sendMessageSchema>["body"];
export type GetMessagesQuery = z.infer<typeof getMessagesSchema>["query"];
export type MarkReadInput = z.infer<typeof markReadSchema>["body"];
