import { api } from "../api";
import { LoginSchema } from "../validations/users/login.schema";
import type { RegisterSchema } from "../validations/users/register.schema";

export const registerUser = (data: Omit<RegisterSchema, 'confirmPassword'>) => {
   return api.post('auth/register', data)
}

export const loginUser = (data: LoginSchema) => {
   return api.post('auth/login', data)
}