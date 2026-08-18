import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.CHAT_APP_DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const result = await prisma.$queryRaw<
    {
      currentUser: string;
      currentDatabase: string;
    }[]
  >`
    SELECT
      current_user AS "currentUser",
      current_database() AS "currentDatabase";
  `;

  console.log(
    "Connected database user:",
    result[0].currentUser,
  );

  console.log(
    "Connected database:",
    result[0].currentDatabase,
  );

  const users = await prisma.user.count();

  console.log(
    "User table is accessible. Current user count:",
    users,
  );
}

main()
  .catch((error) => {
    console.error(
      "chat_app connection test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });