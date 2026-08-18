import {prisma} from "../client";

export const conversationRepository = {
    create(data : {
        name? : string;
        isGroup: boolean;
        directKey?: string;
    }) {
        return prisma.conversation.create({
            data,
        });
    },

    findById(id: string){
        return prisma.conversation.findUnique({
            where: {
                id,
            },
        });
    },
    findDirectKey(directKey: string){
        return prisma.conversation.findUnique({
            where: {
                directKey,
            }
        });
    },

    update(
        id: string,
        data:{
            name?: string;
            isGroup?: boolean;
            directKey?: string;
        },
    ) {
        return prisma.conversation.update({
            where:{
                id,
            },
            data,
        });
    },
};