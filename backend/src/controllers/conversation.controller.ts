import type { Request, Response, NextFunction } from "express";
import * as conversationService from "../services/conversation/conversation.service.js";
import { sendSuccess } from "../utils/response.js";

export async function listConversations(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const conversations = await conversationService.listUserConversations(req.user!.id);
    sendSuccess(res, conversations);
  } catch (err) {
    next(err);
  }
}

export async function createDirect(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { recipientId } = req.body as { recipientId: string };
    const conversation = await conversationService.createDirectConversation(req.user!.id, recipientId);
    sendSuccess(res, conversation, 201);
  } catch (err) {
    next(err);
  }
}

export async function createGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, memberIds } = req.body as { name: string; memberIds: string[] };
    const conversation = await conversationService.createGroupConversation(req.user!.id, name, memberIds);
    sendSuccess(res, conversation, 201);
  } catch (err) {
    next(err);
  }
}

export async function getConversation(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const conversationId = req.params.conversationId as string;
    const conversation = await conversationService.getConversation(conversationId, req.user!.id);
    sendSuccess(res, conversation);
  } catch (err) {
    next(err);
  }
}

export async function addMember(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const conversationId = req.params.conversationId as string;
    const { userId } = req.body as { userId: string };
    const member = await conversationService.addMember(conversationId, userId);
    sendSuccess(res, member, 201);
  } catch (err) {
    next(err);
  }
}

export async function removeMember(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { conversationId, userId } = req.params as { conversationId: string; userId: string };
    await conversationService.removeMember(conversationId, userId, req.user!.id);
    sendSuccess(res, { message: "Member removed" });
  } catch (err) {
    next(err);
  }
}
