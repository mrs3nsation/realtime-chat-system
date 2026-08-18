import { prisma } from "./client";
import { messageRepository } from "./repositories/message.repository";
import { attachmentRepository } from "./repositories/attachment.repository";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: `phase10-attachment-${Date.now()}@example.com`,
      name: "Phase 10 Attachment Test",
    },
  });

  const conversation = await prisma.conversation.create({
    data: {
      name: "Phase 10 Attachment Test Conversation",
      isGroup: true,
    },
  });

  const message = await messageRepository.create({
    conversationId: conversation.id,
    senderId: user.id,
    content: "Message with attachment",
  });

  console.log("Created test user:", user.id);
  console.log("Created test conversation:", conversation.id);
  console.log("Created test message:", message.id);

  const attachment = await attachmentRepository.create({
    messageId: message.id,
    originalName: "test-file.txt",
    storageKey: `phase10/${message.id}/test-file.txt`,
    mimeType: "text/plain",
    size: BigInt(1024),
  });

  console.log("Created attachment:", attachment.id);

  const foundAttachment =
    await attachmentRepository.findById(
      attachment.id,
    );

  if (!foundAttachment) {
    throw new Error("Attachment could not be found.");
  }

  console.log("Found attachment:", foundAttachment.id);

  const attachments =
    await attachmentRepository.findByMessage(
      message.id,
    );

  console.log(
    "Attachments found for message:",
    attachments.length,
  );

  await attachmentRepository.delete(
    attachment.id,
  );

  console.log("Attachment deleted successfully");

  await prisma.conversation.delete({
    where: {
      id: conversation.id,
    },
  });

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  console.log("Test conversation deleted successfully");
  console.log("Test user deleted successfully");
}

main()
  .catch((error) => {
    console.error(
      "Attachment repository test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });