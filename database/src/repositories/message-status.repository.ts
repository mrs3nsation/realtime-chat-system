import { stat } from "node:fs";
import {prisma} from "../client"

export const messageStatusRepository = {
    create(data:{
        messageId: string;
        userId: string;
        status ?: "SENT" | "DELIVERED" | "READ";
    }) {
        return prisma.messageStatus.create({
            data,
        });
    },

    findById(id: string){
        return prisma.messageStatus.findUnique({
            where: {
                id,
            },
        });
    },

    findByMessageAndUser(
        messageId: string,
        userId: string,
    ) {
        return prisma.messageStatus.findUnique({
            where:{
                messageId_userId:{
                    messageId,
                    userId,
                },
            },
        });
    },

    updateStatus(
        id: string,
        status: "SENT" | "DELIVERED" | "READ",
    ) {
        const data: {
            status: "SENT" | "DELIVERED" | "READ";
            deliveredAt?: Date,
            readAt?: Date,
        } = {
            status,
        };

        if (status == "DELIVERED"){
            data.deliveredAt= new Date();
        }

        if(status == "READ"){
            data.readAt= new Date();
        }

        return prisma.messageStatus.update({
            where: {
                id,
            }, data,
        });
    },
};