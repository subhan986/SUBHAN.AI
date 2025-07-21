'use server';
import { rewriteSummary, type RewriteSummaryInput } from '@/ai/flows/summary-tone-changer';

export async function changeSummaryToneAction(input: RewriteSummaryInput) {
  try {
    const result = await rewriteSummary(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to rewrite summary. Please try again.' };
  }
}
