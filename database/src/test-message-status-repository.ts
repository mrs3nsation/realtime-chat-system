import { read } from "node:fs";
import {prisma} from "./client";
import {messageStatusRepository} from "./repositories/message-status.repository"
import {messageRepository} from "./repositories/message.repository"


async function main() {
    const user = await prisma.user.create({
        data: {
            email: `phase-10-test-${Date.now()}@example.com`,
            name: "phase 10 status test",
        },
    });

    const conversation = await prisma.conversation.create({
        data: {
            name: "Phase 10 status test conversation",
            isGroup: true,
        },
    });

    const message = await messageRepository.create({
        conversationId: conversation.id,
        senderId: user.id,
        content: "Phase 10 status test message",
    });

    const messageStatus = await messageStatusRepository.create({
        messageId: message.id,
        userId: user.id,
    });

    console.log("Created message status : ",messageStatus.id);

    const foundStatus = await messageStatusRepository.findByMessageAndUser(message.id,user.id);

    if(!foundStatus){
        throw new Error("Message status not found");
    }
    console.log("Found message status:",foundStatus.id);

    const deliveredStatus = await messageStatusRepository.updateStatus(
        messageStatus.id,
        "DELIVERED",
    );

    console.log("Message delivered at:",deliveredStatus.deliveredAt);

    const readStatus = await messageStatusRepository.updateStatus(messageStatus.id,"READ");

    console.log("Message read at : ",readStatus.readAt);

    const finalStatus = await messageStatusRepository.findById(messageStatus.id);
    if(!finalStatus){
        throw new Error("Final message status could not be found");
    }

    console.log("Final message status:",finalStatus.status);

    await prisma.conversation.delete({
        where: {
            id: conversation.id,
        },
    });

    console.log("Conversation deleted successfully");

    await prisma.user.delete({
        where: {
            id: user.id,
        },
    });

    console.log("User deleted successfully");
}

main()
    .catch((error)=>{
        console.error("message status repo failed :",error);
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })