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
        from: 'noreply@refwise.co',
        to: email,
        subject: `Thank you for joining RefWise`,
        html: `
        Hello ${name}, <br/>
        Thank you for registering with RefWise. <br/>
        My name is Talal and I'll be your main contact at RefWise for any questions and/or suggestions. <br/>
        You have officially joined the exclusive club of people who earn their referral bonus after referring someone through our platform. Welcome! <br/>
        RefWise will launch in July and in the meantime we will keep you updated with all the new features and relevant information. <br/>
        If you have any questions about the platform, I am happy to chat about it. You can book a time in my calendar below:

        <a href="https://calendly.com/refwise/30mins">Book a time</a>
        Best regards, <br/>
        Talal
        `,
    });

    if (error) {
        throw console.error(error);
    }
    console.log(data)

}