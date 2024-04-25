"use server"
import prisma from "./prisma";


export const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    return user
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    return user
}

export const getRefereeById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            referee: true
        }
    })
    return user
}
