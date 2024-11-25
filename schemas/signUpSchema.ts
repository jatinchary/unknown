import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username mustbe alleast 2 charecters")
  .max(20, "username cant be more than 20 chareacter")
  .regex(/^[a-zA-Z0-9]+$/, "username should not contain special charectrers");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "inavalid mail address" }),
  password: z.string().min(6, "password id too short"),
});
