"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Mail} from "lucide-react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/validations/users/login.schema";
import { loginUser } from "@/lib/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ApiError } from "@/lib/errors/api-error";
import { ERROR_MESSAGES, ErrorCode } from "@/lib/errors/error-messages";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  

  const onSubmit = async (data: LoginSchema) => {
    setServerError(null);
    try {
      await loginUser(data);
      router.push('/home')
    } catch (error) {
      if (error instanceof ApiError) {
        const message = error.code
          ? ERROR_MESSAGES[error.code as ErrorCode]
          : error.message;

        const field = error.field as keyof LoginSchema;

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
          <div className="flex items-center">
            {errors.password && (
              <p className="text-sm text-red-700 mt-1">
                {errors.password.message}
              </p>
            )}
            <Link href="" className="text-sm text-green-700 mt-1 hover:text-green-500 ml-auto">
              Esqueci minha senha
            </Link>
          </div>
        </div>

        {serverError && (
          <p className="text-sm text-red-700 mt-2 text-center">{serverError}</p>
        )}
        <Button
          className="bg-green-700 text-white hover:bg-green-800 h-12 mt-4"
          disabled ={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </Card>
    </form>
  );
};
