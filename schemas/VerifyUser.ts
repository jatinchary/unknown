import { z } from "zod";

export const verifSchema = z.object({
  code: z.string().length(6, "atlest 6 digits"),
});
