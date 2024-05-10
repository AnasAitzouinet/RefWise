import { Resend } from "resend";
import * as z from "zod";

const schema = z.object({
    name: z.string(),
    email: z.string(),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is required');
}

export const ThankYouEmail = async ({ email, name }: z.infer<typeof schema>) => {

    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: `Thank you for joining RefWise`,
        text: `
        Hi ${name},
        Thank you for joining RefWise. We will keep you updated on new features and updates.

        Best,
        RefWise Team
        `,
    });

    if (error) {
        throw console.error(error);
    }
    console.log(data)

}