
'use server';
/**
 * @fileOverview A flow for sending a message from the contact form.
 *
 * - sendMessage - A function that handles sending the message.
 * - SendMessageInput - The input type for the sendMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

// This is a placeholder for a real email sending service.
// It currently only logs the message to the server console.
// To send a real email, you would replace this with a call to a service like Resend, SendGrid, etc.
// This involves signing up for that service, getting an API key, and using their library.
async function sendEmail(input: SendMessageInput) {
    console.log("New message received from contact form:");
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);

    // --- Example for sending email with a service like Resend ---
    // 1. Install the service's package: `npm install resend`
    // 2. Get an API key from resend.com and add it to your .env file: `RESEND_API_KEY=your_key_here`
    // 3. Uncomment and adapt the code below:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // try {
    //   await resend.emails.send({
    //     from: 'onboarding@resend.dev', // This must be a domain you've configured in Resend
    //     to: 'subyounas@gmail.com', // Your email address
    //     subject: `New message from ${input.name}`,
    //     html: `<p>From: ${input.name} &lt;${input.email}&gt;</p><p>${input.message}</p>`,
    //   });
    //   return { success: true };
    // } catch (error) {
    //   console.error("Failed to send email:", error);
    //   return { success: false };
    // }
    
    // The current placeholder always returns success.
    return { success: true };
}


const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    // You can add more logic here, like saving the message to a database.
    const result = await sendEmail(input);
    return result;
  }
);

export async function sendMessage(input: SendMessageInput) {
    return sendMessageFlow(input);
}
