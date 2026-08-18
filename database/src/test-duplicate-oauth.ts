import { prisma } from "./client";
import { OAuthProvider } from "../generated/prisma/client";

async function main() {
  const provider = OAuthProvider.GOOGLE;
  const providerAccountId = `oauth-test-${Date.now()}`;

  let user1Id: string | undefined;
  let user2Id: string | undefined;

  try {
    const user1 = await prisma.user.create({
      data: {
        email: `oauth-user-1-${Date.now()}@example.com`,
        name: "OAuth User 1",
      },
    });

    user1Id = user1.id;

    console.log(
      "Created first user:",
      user1.id,
    );

    const user2 = await prisma.user.create({
      data: {
        email: `oauth-user-2-${Date.now()}@example.com`,
        name: "OAuth User 2",
      },
    });

    user2Id = user2.id;

    console.log(
      "Created second user:",
      user2.id,
    );

    const account1 = await prisma.oAuthAccount.create({
      data: {
        userId: user1.id,
        provider,
        providerAccountId,
      },
    });

    console.log(
      "Created first OAuth account:",
      account1.id,
    );

    try {
      await prisma.oAuthAccount.create({
        data: {
          userId: user2.id,
          provider,
          providerAccountId,
        },
      });

      console.log(
        "ERROR: Duplicate OAuth identity was accepted.",
      );
    } catch (error) {
      console.log(
        "Duplicate OAuth identity rejected successfully.",
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
      "Test OAuth users deleted successfully",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Duplicate OAuth test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });