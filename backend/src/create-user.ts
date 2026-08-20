import "dotenv/config";
import { userRepository } from "./config/db.js";
import { prisma } from "./config/db.js";

async function main(){
        console.log("Creating new user");

        const user = await userRepository.create({
            email: "sensoutrik@rediff.com",
            passwordHash: "eruifbeiurhfg",
            name: "Soutrik Sen"
        });

        console.log("new user created : ",user.name);

        console.log(await prisma.user.findMany({
            select: {
                id: true,
                email: true,
            }
        }))
}

main()
    .catch((err) => {
        console.error("Failed to create user:", err.message);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


    