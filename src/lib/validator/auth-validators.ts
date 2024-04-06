import { z } from "zod"

export const CreateUserSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Passowrd should be at least 8 characters" }),
})

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Passowrd should be at least 8 characters" }),
})

export type TSignInSchema = z.infer<typeof SignInSchema>
export type TCreateUserSchema = z.infer<typeof CreateUserSchema>
