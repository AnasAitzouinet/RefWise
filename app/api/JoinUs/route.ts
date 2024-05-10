import { ThankYouEmail } from "@/Actions";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import * as z from 'zod';


export async function POST(req: Request, res: NextApiResponse) {
    try {
        const { name, email, phone, company } = await req.json();
        const validater = z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string(),
            company: z.string()
        })
        const isValid = validater.safeParse({ name, email, phone, company });
        if (!isValid.success) {
            return Response.json({ error: isValid.error });
        }
        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone_number: phone,
                companyName: company
            }
        });
        const ThankYou = await ThankYouEmail({ email, name });
        return Response.json({ message: `${name} Has Joined RefWise successfully` });
    } catch (err) {
        console.log(err);
        return Response.json({ error: 'Something went wrong' });
    }
}