import { z } from "zod";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/;
const phoneNumberRegex = /^(?:\+?55\s?)?(?:\(?([1-9][1-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
export const registerSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Email inválido"),
    phoneNumber: z
      .string()
      .regex(phoneNumberRegex, "Número de telefone inválido"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .regex(
        passwordRegex,
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
