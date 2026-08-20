import type { Request, Response, NextFunction } from "express";
import * as messageService from "../services/message/message.service.js";
import * as messageStatusService from "../services/message/message-status.service.js";
import { sendSuccess, sendPaginated } from "../utils/response.js";

export async function sendMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const conversationId = req.params.conversationId as string;
    const { content } = req.body as { content: string };
    const message = await messageService.sendMessage(conversationId, req.user!.id, content);
    sendSuccess(res, message, 201);
  } catch (err) {
    next(err);
  }
}

export async function getMessages(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const conversationId = req.params.conversationId as string;
    const cursor = req.query.cursor as string | undefined;
    const limit = req.query.limit ? Number(req.query.limit) : 20;

    const result = await messageService.getMessages(conversationId, req.user!.id, limit, cursor);
    sendPaginated(res, result.items, { nextCursor: result.nextCursor, hasMore: result.hasMore });
  } catch (err) {
    next(err);
  }
}

export async function deleteMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const messageId = req.params.messageId as string;
    await messageService.deleteMessage(messageId, req.user!.id);
    sendSuccess(res, { message: "Message deleted" });
  } catch (err) {
    next(err);
  }
}

export async function markRead(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { messageIds } = req.body as { messageIds: string[] };
    await messageStatusService.markManyRead(messageIds, req.user!.id);
    sendSuccess(res, { message: "Messages marked as read" });
  } catch (err) {
    next(err);
  }
}
