import { prisma } from "./client";

async function main() {
  let userId: string | undefined;
  let conversationId: string | undefined;

  try {
    const user = await prisma.user.create({
      data: {
        email: `duplicate-member-${Date.now()}@example.com`,
        name: "Duplicate Membership Test User",
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

    const membership = await prisma.conversationMember.create({
      data: {
        conversationId: conversation.id,
        userId: user.id,
      },
    });

    console.log(
      "Created first membership:",
      membership.id,
    );

    try {
      await prisma.conversationMember.create({
        data: {
          conversationId: conversation.id,
          userId: user.id,
        },
      });

      console.log(
        "ERROR: Duplicate conversation membership was accepted.",
      );
    } catch (error) {
      console.log(
        "Duplicate conversation membership rejected successfully.",
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
      "Duplicate membership test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });