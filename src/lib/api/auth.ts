import { api } from "../api";
import type { RegisterSchema } from "../validations/users/register.schema";

export const registerUser = (data: Omit<RegisterSchema, 'confirmPassword'>) => {
   return api.post('auth/register', data)
}