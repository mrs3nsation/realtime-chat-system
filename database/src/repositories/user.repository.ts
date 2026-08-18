import {prisma} from "../client";

export const userRepository = {
    findById(id: string){
        return prisma.user.findUnique({
            where: { id },
        });
    },

    findByEmail(email: string){
        return prisma.user.findUnique({
            where: {email}
        });
    },

    create(data: {
        email: string;
        passwordHash? : string;
        name?: string;
        avatarUrl?: string
    }) {
        return prisma.user.create({
            data,
        });
    },

    update(
        id: string,
        data: {
            email?: string;
            passwordHash?: string;
            name?: string;
            avatarUrl?: string;
        },
    ) {
        return prisma.user.update({
            where: {id},data
        });
    },
};