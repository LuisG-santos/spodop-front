import z from "zod"

export const loginSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(1,"Este campo é obrigatório")
})

export type LoginSchema = z.infer<typeof loginSchema>