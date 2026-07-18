export const ERROR_MESSAGES: Record<string, string> = {
  EMAIL_ALREADY_IN_USE: "Email já cadastrado",
  PHONE_ALREADY_IN_USE: "Telefone já cadastrado",
  INVALID_CREDENTIALS: "Email ou senha incorretos",
} as const;

export type ErrorCode = keyof typeof ERROR_MESSAGES
