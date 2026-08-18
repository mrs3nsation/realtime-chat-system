import { prisma } from "./client";

async function main() {
  let userId: string | undefined;
  let conversationId: string | undefined;
  let messageId: string | undefined;

  try {
    const user = await prisma.user.create({
      data: {
        email: `duplicate-status-${Date.now()}@example.com`,
        name: "Duplicate Status Test User",
      },
    });

    userId = user.id;

    console.log(
      "Created test user:",
      user.id,
    );

    const conversation = await prisma.conversation.create({
      data: {
        isGroup: false,
      },
    });

    conversationId = conversation.id;

    console.log(
      "Created test conversation:",
      conversation.id,
    );

    const message = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        senderId: user.id,
        content: "Duplicate status test message",
      },
    });

    messageId = message.id;

    console.log(
      "Created test message:",
      message.id,
    );

    const status = await prisma.messageStatus.create({
      data: {
        messageId: message.id,
        userId: user.id,
      },
    });

    console.log(
      "Created first message status:",
      status.id,
    );

    try {
      await prisma.messageStatus.create({
        data: {
          messageId: message.id,
          userId: user.id,
        },
      });

      console.log(
        "ERROR: Duplicate message status was accepted.",
      );
    } catch (error) {
      console.log(
        "Duplicate message status rejected successfully.",
      );
    }
  } finally {
    if (conversationId) {
      await prisma.conversation.delete({
        where: {
          id: conversationId,
        },
      });
    }

    if (userId) {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
    }

    console.log(
      "Test conversation and user deleted successfully",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Duplicate message status test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });