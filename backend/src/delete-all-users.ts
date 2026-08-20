import "dotenv/config";
import { prisma } from "./config/db.js";

async function main() {
    // Show what will be deleted first
    const users = await prisma.user.findMany({
        select: { id: true, email: true, name: true },
    });

    console.log(`\nAbout to delete ${users.length} users:\n`);
    console.table(users);

    // Delete all users (cascade will clean up related rows automatically)
    const deleted = await prisma.user.deleteMany({});

    console.log(`\nDeleted ${deleted.count} users successfully.\n`);

    // Confirm table is empty
    const remaining = await prisma.user.count();
    console.log(`Users remaining in database: ${remaining}`);
}

main()
    .catch((err) => {
        console.error("Error:", err.message);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
