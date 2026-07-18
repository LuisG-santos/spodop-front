"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, LockKeyhole, Mail, PhoneIcon, User } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  RegisterSchema,
} from "@/lib/validations/users/register.schema";
import { registerUser } from "../../../../lib/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ApiError } from "@/lib/errors/api-error";
import { ERROR_MESSAGES, ErrorCode } from "@/lib/errors/error-messages";
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterSchema) => {
    setServerError(null);
    try {
      await registerUser(data);
    } catch (error) {
      if (error instanceof ApiError) {
        const message = error.code
          ? ERROR_MESSAGES[error.code as ErrorCode]
          : error.message;

        const field = error.field as keyof RegisterSchema;

        if (error.field) {
          setError(field, { message: message });
        } else {
          setServerError(message);
        }
        return;
      }
      setServerError((error as Error).message);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Card className="flex flex-col gap-3 p-4">
        <div className="relative">
          <p>Nome completo</p>
          <div className="relative">

            <User className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-green-700" />

            <input
              {...register("name")}
              type="text"
              placeholder="Digite seu nome completo"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full h-12"
            />
          </div>

          {errors.name && (
            <p className="text-sm text-red-700 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="relative">
          <p>Email</p>
          <div className="relative">
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-green-700" />

            <input
              {...register("email")}
              type="email"
              placeholder="Digite seu email"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full h-12"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-700 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <p>Telefone</p>
          <div className="relative">
            <PhoneIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-green-700" />

            <input
              {...register("phoneNumber")}
              type="tel"
              placeholder="Digite seu telefone"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full h-12"
            />
          </div>

          {errors.phoneNumber && (
            <p className="text-sm text-red-700 mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="relative">
          <p>Senha</p>
          <div className="relative">
            <LockKeyhole className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-green-700" />

            <input
              {...register("password")}
              type="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full h-12"
            />
          </div>

          {errors.password && (
            <p className="text-sm text-red-700 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="relative">
          <p>Confirmar senha</p>
          <div className="relative">
            <LockKeyhole className="absolute left-2 top-1/2 -translate-y-1/2 size-5 text-green-700" />

            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirme sua senha"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full h-12"
            />
          </div>

          {errors.confirmPassword && (
            <p className="text-sm text-red-700 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {serverError && (
          <p className="text-sm text-red-700 mt-2 text-center">{serverError}</p>
        )}
        <Button
          className="bg-green-700 text-white hover:bg-green-800 h-12 mt-4"
          type="submit"
        >
          Criar conta
        </Button>
      </Card>
    </form>
  );
};
