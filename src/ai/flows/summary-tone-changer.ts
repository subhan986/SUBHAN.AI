'use server';

/**
 * @fileOverview Rewrites the summary based on different emotional tones.
 *
 * - rewriteSummary - A function that rewrites the summary based on the given tone.
 * - RewriteSummaryInput - The input type for the rewriteSummary function.
 * - RewriteSummaryOutput - The return type for the rewriteSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteSummaryInputSchema = z.object({
  summary: z.string().describe('The original summary text.'),
  tone: z.string().describe('The emotional tone to rewrite the summary in.'),
});

export type RewriteSummaryInput = z.infer<typeof RewriteSummaryInputSchema>;

const RewriteSummaryOutputSchema = z.object({
  rewrittenSummary: z.string().describe('The summary rewritten in the specified tone.'),
});

export type RewriteSummaryOutput = z.infer<typeof RewriteSummaryOutputSchema>;

export async function rewriteSummary(input: RewriteSummaryInput): Promise<RewriteSummaryOutput> {
  return rewriteSummaryFlow(input);
}

const rewriteSummaryPrompt = ai.definePrompt({
  name: 'rewriteSummaryPrompt',
  input: {schema: RewriteSummaryInputSchema},
  output: {schema: RewriteSummaryOutputSchema},
  prompt: `Rewrite the following summary in a {{tone}} tone:\n\n{{{summary}}}`,
});

const rewriteSummaryFlow = ai.defineFlow(
  {
    name: 'rewriteSummaryFlow',
    inputSchema: RewriteSummaryInputSchema,
    outputSchema: RewriteSummaryOutputSchema,
  },
  async input => {
    const {output} = await rewriteSummaryPrompt(input);
    return output!;
  }
);
