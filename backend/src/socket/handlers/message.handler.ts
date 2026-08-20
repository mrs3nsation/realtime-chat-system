import type { Server, Socket } from "socket.io";
import * as messageService from "../../services/message/message.service.js";
import * as messageStatusService from "../../services/message/message-status.service.js";
import { conversationMemberRepository } from "../../config/db.js";
import { socketSendMessageSchema, socketMarkReadSchema } from "../../validators/socket.validator.js";
import { logger } from "../../utils/logger.js";

export function registerMessageHandlers(io: Server, socket: Socket): void {
  socket.on("conversation:join", async (conversationId: string) => {
    const isMember = await conversationMemberRepository.isMember(
      conversationId,
      socket.user.id
    );
    if (isMember) {
      await socket.join(`conversation:${conversationId}`);
    }
  });

  socket.on("conversation:leave", (conversationId: string) => {
    void socket.leave(`conversation:${conversationId}`);
  });

  socket.on("message:send", async (payload: unknown) => {
    const result = socketSendMessageSchema.safeParse(payload);
    if (!result.success) {
      socket.emit("error", { message: "Invalid message payload" });
      return;
    }

    const { conversationId, content, tempId } = result.data;

    const isMember = await conversationMemberRepository.isMember(
      conversationId,
      socket.user.id
    );

    if (!isMember) {
      socket.emit("error", { message: "Not a member of this conversation" });
      return;
    }

    try {
      const message = await messageService.sendMessage(
        conversationId,
        socket.user.id,
        content ?? ""
      );

      io.to(`conversation:${conversationId}`).emit("message:new", {
        ...message,
        tempId,
      });
    } catch (err) {
      logger.error("Failed to send message via socket", { err });
      socket.emit("error", { message: "Failed to send message" });
    }
  });

  socket.on("message:read", async (payload: unknown) => {
    const result = socketMarkReadSchema.safeParse(payload);
    if (!result.success) return;

    const { conversationId, messageIds } = result.data;

    await messageStatusService.markManyRead(messageIds, socket.user.id);

    io.to(`conversation:${conversationId}`).emit("message:read_receipt", {
      userId: socket.user.id,
      messageIds,
    });
  });
}
