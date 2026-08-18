import { prisma } from "./client";

async function main() {
  const email = `duplicate-${Date.now()}@example.com`;

  const firstUser = await prisma.user.create({
    data: {
      email,
      name: "Duplicate Test User",
    },
  });

  console.log(
    "First user created:",
    firstUser.id,
  );

  try {
    await prisma.user.create({
      data: {
        email,
        name: "Duplicate Test User 2",
      },
    });

    console.log(
      "ERROR: Duplicate email was accepted.",
    );
  } catch (error) {
    console.log(
      "Duplicate email rejected successfully.",
    );
  }

  await prisma.user.delete({
    where: {
      id: firstUser.id,
    },
  });

  console.log(
    "Test user deleted successfully",
  );
}

main()
  .catch((error) => {
    console.error(
      "Duplicate user test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });