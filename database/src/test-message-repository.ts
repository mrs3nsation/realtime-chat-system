import {prisma} from "./client";
import {messageRepository} from "./repositories/message.repository"

async function main(){
    const user = await prisma.user.create({
        data: {
            email: `phase10-message-${Date.now()}@example.com`,
            name: "Phase 10 message test"
        }
    });

    const conversation = await prisma.conversation.create({
        data: {
            name: "phase 10 message conversation",
            isGroup: true,
        },
    });

    console.log("User created",user.id);
    console.log("Conversation created", conversation.id);

    const message = await messageRepository.create({
        conversationId: conversation.id,
        senderId: user.id,
        content:"Phase 10 message content",
    });

    console.log("Message created",message.id);

    const foundMessage = await messageRepository.findById(message.id);
    if (!foundMessage){
        throw new Error("Message not found by ID");
    }

    console.log("message found",foundMessage.id);

    const updatedMessage = await messageRepository.update(
        message.id,
        {
            content: "updated phase 10 message content",
        },
    );

    console.log("Updated message",updatedMessage.id);

    const messages = await messageRepository.findByConversation(
        conversation.id
    );

    console.log("Messages found:",messages.length);

    const deletedMessage = await messageRepository.softDelete(
        message.id,
    );

    console.log("Message soft deleted at :",deletedMessage.deletedAt);

    const remainingMessages = await messageRepository.findByConversation(conversation.id);

    console.log("Messages remaining after soft delete : ",remainingMessages.length);

    await prisma.conversation.delete({
        where: {
            id: conversation.id,
        },
    });

    console.log("Test conversation deleted successfully ");

    await prisma.user.delete({
        where: {
            id: user.id
        }
    });

    console.log("User deleted successfully");
}

main()
    .catch((error)=>{
        console.error ("Message repo failed",error);
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })