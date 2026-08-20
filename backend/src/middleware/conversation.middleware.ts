import type { Request, Response, NextFunction } from "express";
import { conversationMemberRepository } from "../config/db.js";
import { ForbiddenError, UnauthorizedError } from "../utils/errors.js";

export function requireMember(req: Request, _res: Response, next: NextFunction): void {
  void (async () => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    const conversationId = req.params.conversationId as string;

    const membership = await conversationMemberRepository.isMember(
      conversationId,
      req.user.id
    );

    if (!membership) {
      return next(new ForbiddenError("You are not a member of this conversation"));
    }

    next();
  })();
}

export function requireAdmin(req: Request, _res: Response, next: NextFunction): void {
  void (async () => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    const conversationId = req.params.conversationId as string;

    const member = await conversationMemberRepository.findByConversationAndUser(
      conversationId,
      req.user.id
    );

    if (!member) {
      return next(new ForbiddenError("You are not a member of this conversation"));
    }

    if (member.role !== "ADMIN") {
      return next(new ForbiddenError("This action requires admin privileges"));
    }

    next();
  })();
}
