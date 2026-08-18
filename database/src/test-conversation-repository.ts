import { prisma} from "./client";
import {conversationRepository} from  "./repositories/conversation.repository";

async function main(){
    const directKey = `phase10-direct-${Date.now()}`;
    const directConversation = await conversationRepository.create({
        isGroup: false,
        directKey,
    });

    console.log("created direct conversation:",directConversation.id);

    const foundDirect = await conversationRepository.findDirectKey(directKey);
    if(!foundDirect){
        throw new Error("Direct conversation not found");
    }

    console.log("Direct conversation found :",foundDirect.id);

    const foundById = await conversationRepository.findById(directConversation.id);

    if(!foundById){
        throw new Error("Conversation not found by ID");
    }

    console.log("Found conversation by ID :",foundById.id);

    const updatedDirect = await conversationRepository.update(
        directConversation.id,
        {
        name: "phase10 direct user",
        }
    );

    console.log("Updated conversation:",updatedDirect.id);

    const groupConversation = await conversationRepository.create({
        name: "Phase 10 test group",
        isGroup: true,
    });

    console.log("Created group conversation",groupConversation.id);

    await prisma.conversation.delete({
        where: {
            id: directConversation.id,
        },
    });

    console.log("Direct conversation deleted successfully");

    await prisma.conversation.delete({
        where: {
            id: groupConversation.id,
        },
    });

    console.log("Group conversation deleted successfully");
}

main()
    .catch((error)=>{
        console.error("Conversation repository failed :",error);
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect()
    });