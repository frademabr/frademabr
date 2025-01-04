'use server';

import { success } from 'src/theme';
import { MarketingContactSchema } from './schema';
import { z } from 'zod';

export async function contactFormAction(_prevState: unknown, formData: FormData) {
  const defaultValues = z
    .record(z.string(), z.string())
    .parse(Object.fromEntries(formData.entries()));

  try {
    const data = MarketingContactSchema.parse(Object.fromEntries(formData));

    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data); // I think this is what goes into supabase, let's see

    return {
      defaultValues: {
        filiais: [],
        email: '',
        empresa: '',
        nome: '',
        cel: '',
        outros: [],
      },
      success: true,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      };
    }

    return {
      defaultValues,
      success: false,
      error: null,
    };
  }
}