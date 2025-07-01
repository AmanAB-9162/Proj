import { z } from "zod";

const loanSchema = z.object({
  applicantId: z.string().min(1),
  loanAmount: z.number().positive(),
  email: z.string().email()
});

export const validateLoan = (data: any) => {
  try {
    loanSchema.parse(data);
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.errors[0].message };
  }
};
