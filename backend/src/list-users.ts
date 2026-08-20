import "dotenv/config";
import { prisma } from "./config/db.js";

async function main() {
    const count = await prisma.user.count();
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
        },
        orderBy: { createdAt: "asc" },
    });

    console.log(`\nTotal users in database: ${count}\n`);
    console.table(users);
}

main()
    .catch((err) => {
        console.error("Error:", err.message);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
