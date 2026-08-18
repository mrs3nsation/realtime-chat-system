import {prisma} from "./client";
import {conversationMemberRepository} from "./repositories/conversation-member.repository"

async function main(){
    const user = await prisma.user.create({
        data: {
            email: `phase10 member - ${Date.now()}@example.com`,
            name: "Phase 10 member test",
        },
    });

    const conversation = await prisma.conversation.create({
        data: {
            name: "phase 10 member test conversation",
            isGroup: true,
        },
    });

    console.log("created test user", user.id);
    console.log("created test conversation",conversation.id);

    const member = await conversationMemberRepository.create({
        conversationId: conversation.id,
        userId: user.id,
    });

    console.log("created membership",member.id);

    const foundMember = await conversationMemberRepository.findByConversationAndUser(
        conversation.id,
        user.id
    );

    if(!foundMember){
        throw new Error("Conversation member could not be found");
    }

    console.log("Found  membership",foundMember.id);

    const membershipCheck = await conversationMemberRepository.isMember(
        conversation.id,
        user.id
    );

    if(!membershipCheck){
        throw new Error("Membership not found");
    }

    console.log("Membership id found");

    const members = await conversationMemberRepository.findByConversation(conversation.id);

    console.log("Members found", members.length);

    await conversationMemberRepository.remove(
        conversation.id,
        user.id,
    );

    console.log("Membership removed successfully");

    await prisma.conversation.delete({
        where: {
            id: conversation.id,
        },
    });

    console.log("Test conversation deleted successfully");
    console.log("Test user deleted successfully");
}

main()
    .catch((error)=>{
        console.error("Conversation member repo failed");
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })