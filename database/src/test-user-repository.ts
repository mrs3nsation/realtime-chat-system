import { error } from "node:console";
import { prisma } from "./client";
import { userRepository } from "./repositories/user.repository";

async function main(){
    const email = `phase10-test-${Date.now()}@example.com`;

    const createdUser = await userRepository.create({
        email,
        name: "phase 10 test user",
    });

    console.log("created user",createdUser.id);
    const foundByEmail = await userRepository.findByEmail(email);

    if(!foundByEmail){
        throw new Error("user could not be found by email");
    }

    console.log("Found by email : ", foundByEmail.id);

    const foundById = await userRepository.findById(createdUser.id);

    if(!foundById){
        throw new Error("User could not be found by id");
    }

    console.log("Found by ID",foundById.id);

    const updatedUser = await userRepository.update(createdUser.id,{name: "updated phase 10 user",});

    console.log("Updated user:",updatedUser.name);

    await prisma.user.delete({
        where: {id : createdUser.id},
    });

    console.log("Test user deleted successfully");
}

main()
    .catch((error)=>{
        console.error("User repo test failed",error);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    });