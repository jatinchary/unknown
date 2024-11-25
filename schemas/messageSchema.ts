import { z } from "zod";
export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "minimunm 10 charecters are required")
    .max(300, "must be less then 300 charecters"),
});
  