import { prisma } from "./client";

async function main() {
  let userId: string | undefined;
  let conversationId: string | undefined;

  try {
    const user = await prisma.user.create({
      data: {
        email: `message-transaction-${Date.now()}@example.com`,
        name: "Message Transaction User",
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

    await prisma.conversationMember.create({
      data: {
        conversationId: conversation.id,
        userId: user.id,
      },
    });

    console.log(
      "Created conversation membership.",
    );

    let messageId: string | undefined;

    try {
      await prisma.$transaction(async (tx) => {
        const message = await tx.message.create({
          data: {
            conversationId: conversation.id,
            senderId: user.id,
            content: "Transaction test message",
          },
        });

        messageId = message.id;

        console.log(
          "Created message inside transaction:",
          message.id,
        );

        await tx.messageStatus.create({
          data: {
            messageId: message.id,
            userId: user.id,
            status: "SENT",
          },
        });

        console.log(
          "Created message status.",
        );

        await tx.attachment.create({
          data: {
            messageId: "00000000-0000-0000-0000-000000000000",
            originalName: "transaction-test.txt",
            storageKey: `transaction-test-${Date.now()}`,
            mimeType: "text/plain",
            size: BigInt(100),
          },
        });
      });

      console.log(
        "ERROR: Transaction unexpectedly succeeded.",
      );
    } catch (error) {
      console.log(
        "Transaction failed as expected.",
      );
    }

    if (messageId) {
      const message = await prisma.message.findUnique({
        where: {
          id: messageId,
        },
      });

      const statuses = await prisma.messageStatus.findMany({
        where: {
          messageId,
        },
      });

      const attachments = await prisma.attachment.findMany({
        where: {
          messageId,
        },
      });

      console.log(
        "Message exists after rollback:",
        message !== null,
      );

      console.log(
        "Statuses remaining after rollback:",
        statuses.length,
      );

      console.log(
        "Attachments remaining after rollback:",
        attachments.length,
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
      "Test data deleted successfully.",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Message transaction test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });