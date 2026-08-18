import { prisma } from "./client";

async function main() {
  let user1Id: string | undefined;
  let user2Id: string | undefined;

  try {
    const user1 = await prisma.user.create({
      data: {
        email: `transaction-user-1-${Date.now()}@example.com`,
        name: "Transaction User 1",
      },
    });

    user1Id = user1.id;

    const user2 = await prisma.user.create({
      data: {
        email: `transaction-user-2-${Date.now()}@example.com`,
        name: "Transaction User 2",
      },
    });

    user2Id = user2.id;

    console.log("Created test users.");
    console.log("User 1:", user1.id);
    console.log("User 2:", user2.id);

    let conversationId: string | undefined;

    try {
      await prisma.$transaction(async (tx) => {
        const conversation = await tx.conversation.create({
          data: {
            name: "Transaction Test Conversation",
            isGroup: true,
          },
        });

        conversationId = conversation.id;

        console.log(
          "Created conversation inside transaction:",
          conversation.id,
        );

        await tx.conversationMember.create({
          data: {
            conversationId: conversation.id,
            userId: user1.id,
            role: "ADMIN",
          },
        });

        console.log("Created first membership.");

        await tx.conversationMember.create({
          data: {
            conversationId: conversation.id,
            userId: user2.id,
            role: "MEMBER",
          },
        });

        console.log("Created second membership.");

        await tx.conversationMember.create({
          data: {
            conversationId: conversation.id,
            userId: "00000000-0000-0000-0000-000000000000",
            role: "MEMBER",
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

    if (conversationId) {
      const conversation = await prisma.conversation.findUnique({
        where: {
          id: conversationId,
        },
      });

      const memberships =
        await prisma.conversationMember.findMany({
          where: {
            conversationId,
          },
        });

      console.log(
        "Conversation exists after rollback:",
        conversation !== null,
      );

      console.log(
        "Memberships remaining after rollback:",
        memberships.length,
      );
    }
  } finally {
    if (user1Id) {
      await prisma.user.delete({
        where: {
          id: user1Id,
        },
      });
    }

    if (user2Id) {
      await prisma.user.delete({
        where: {
          id: user2Id,
        },
      });
    }

    console.log(
      "Test users deleted successfully.",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Transaction test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });