import {
  conversationRepository,
  conversationMemberRepository,
  userRepository,
} from "../../config/db.js";
import { ConflictError, ForbiddenError, NotFoundError } from "../../utils/errors.js";

export async function createDirectConversation(
  currentUserId: string,
  recipientId: string
) {
  const recipient = await userRepository.findById(recipientId);
  if (!recipient) {
    throw new NotFoundError("Recipient user not found");
  }

  const directKey = [currentUserId, recipientId].sort().join("_");

  const existing = await conversationRepository.findDirectKey(directKey);
  if (existing) {
    return existing;
  }

  const conversation = await conversationRepository.create({
    isGroup: false,
    directKey,
  });

  await conversationMemberRepository.create({ conversationId: conversation.id, userId: currentUserId });
  await conversationMemberRepository.create({ conversationId: conversation.id, userId: recipientId });

  return conversation;
}

export async function createGroupConversation(
  creatorId: string,
  name: string,
  memberIds: string[]
) {
  const conversation = await conversationRepository.create({ isGroup: true, name });

  const allMemberIds = Array.from(new Set([creatorId, ...memberIds]));

  await Promise.all(
    allMemberIds.map((userId) =>
      conversationMemberRepository.create({
        conversationId: conversation.id,
        userId,
        role: userId === creatorId ? "ADMIN" : "MEMBER",
      })
    )
  );

  return conversation;
}

export async function getConversation(conversationId: string, userId: string) {
  const conversation = await conversationRepository.findById(conversationId);
  if (!conversation) {
    throw new NotFoundError("Conversation not found");
  }

  const membership = await conversationMemberRepository.isMember(conversationId, userId);
  if (!membership) {
    throw new ForbiddenError("You are not a member of this conversation");
  }

  const members = await conversationMemberRepository.findByConversation(conversationId);
  return { ...conversation, members };
}

export async function addMember(
  conversationId: string,
  userId: string
) {
  const conversation = await conversationRepository.findById(conversationId);
  if (!conversation) {
    throw new NotFoundError("Conversation not found");
  }

  if (!conversation.isGroup) {
    throw new ForbiddenError("Cannot add members to a direct conversation");
  }

  const existing = await conversationMemberRepository.isMember(conversationId, userId);
  if (existing) {
    throw new ConflictError("User is already a member of this conversation");
  }

  return conversationMemberRepository.create({ conversationId, userId });
}

export async function removeMember(
  conversationId: string,
  userId: string,
  requesterId: string
) {
  if (userId === requesterId) {
    return conversationMemberRepository.remove(conversationId, userId);
  }

  const member = await conversationMemberRepository.findByConversationAndUser(
    conversationId,
    userId
  );
  if (!member) {
    throw new NotFoundError("Member not found in this conversation");
  }

  return conversationMemberRepository.remove(conversationId, userId);
}
