import { messageRepository, conversationMemberRepository } from "../../config/db.js";
import { ForbiddenError, NotFoundError } from "../../utils/errors.js";
import { buildMessageCursor, parseMessageCursor } from "../../utils/pagination.js";

export async function sendMessage(
  conversationId: string,
  senderId: string,
  content: string
) {
  return messageRepository.create({ conversationId, senderId, content });
}

export async function getMessages(
  conversationId: string,
  userId: string,
  limit = 20,
  cursor?: string
) {
  const membership = await conversationMemberRepository.isMember(conversationId, userId);
  if (!membership) {
    throw new ForbiddenError("You are not a member of this conversation");
  }

  const parsed = parseMessageCursor(cursor);

  const messages = await messageRepository.findByConversation(conversationId, limit + 1);

  const filteredMessages = parsed
    ? messages.filter(
        (m) =>
          m.createdAt < parsed.createdAt ||
          (m.createdAt.getTime() === parsed.createdAt.getTime() && m.id < parsed.id)
      )
    : messages;

  const hasMore = filteredMessages.length > limit;
  const items = hasMore ? filteredMessages.slice(0, limit) : filteredMessages;

  const nextCursor =
    hasMore && items.length > 0
      ? buildMessageCursor(items[items.length - 1].createdAt, items[items.length - 1].id)
      : null;

  return { items, nextCursor, hasMore };
}

export async function deleteMessage(messageId: string, userId: string) {
  const message = await messageRepository.findById(messageId);

  if (!message) {
    throw new NotFoundError("Message not found");
  }

  if (message.senderId !== userId) {
    throw new ForbiddenError("You can only delete your own messages");
  }

  return messageRepository.softDelete(messageId);
}
