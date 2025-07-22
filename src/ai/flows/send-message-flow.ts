
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
// You would replace this with a call to a service like Resend, SendGrid, etc.
async function sendEmail(input: SendMessageInput) {
    console.log("New message from contact form:");
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);
    // In a real application, you would add your email sending logic here.
    // Example using a hypothetical email service:
    // await emailService.send({
    //   from: 'your-website@example.com',
    //   to: 'subyounas@gmail.com',
    //   subject: `New message from ${input.name}`,
    //   text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
    // });
    return { success: true };
}


const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    // You can add more logic here, like saving to a database, etc.
    const result = await sendEmail(input);
    return result;
  }
);

export async function sendMessage(input: SendMessageInput) {
    return sendMessageFlow(input);
}
