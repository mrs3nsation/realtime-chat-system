import { messageStatusRepository } from "../../config/db.js";

export async function markDelivered(messageId: string, userId: string): Promise<void> {
  const existing = await messageStatusRepository.findByMessageAndUser(messageId, userId);

  if (!existing) {
    await messageStatusRepository.create({ messageId, userId, status: "DELIVERED" });
    return;
  }

  if (existing.status === "SENT") {
    await messageStatusRepository.updateStatus(existing.id, "DELIVERED");
  }
}

export async function markRead(messageId: string, userId: string): Promise<void> {
  const existing = await messageStatusRepository.findByMessageAndUser(messageId, userId);

  if (!existing) {
    await messageStatusRepository.create({ messageId, userId, status: "READ" });
    return;
  }

  if (existing.status !== "READ") {
    await messageStatusRepository.updateStatus(existing.id, "READ");
  }
}

export async function markManyRead(messageIds: string[], userId: string): Promise<void> {
  await Promise.all(messageIds.map((id) => markRead(id, userId)));
}
