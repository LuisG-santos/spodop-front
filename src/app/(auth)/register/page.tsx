"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft} from "lucide-react";
import { useRouter } from "next/navigation";
import { RegisterForm } from "./_components/forms";
import Image from "next/image";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-[url(/foreground.PNG)] bg-auto opacity-70 -z-10" />
      <div className="flex flex-col pt-2 px-5 flex-1">
        <div className="flex p-4">
          <header className="flex items-center gap-20">
            <Button
              className=" text-black font-bold h-8 border-none bg-gray-200 hover:bg-gray-200"
              variant="outline"
              onClick={() => router.back()}
            >
              <ChevronLeft size={40}/>
            </Button>

            <h1 className="text-md font-sans font-semibold">Criar conta</h1>
          </header>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 p-2">
          <Image
            alt="logo"
            priority
            src="/logo1.svg"
            width={300}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="text-md font-semibold text-gray-800">Crie sua conta para começar</h2>
          <p className="text-sm text-zinc-500">
            Gerencie suas propriedades e aplicações
          </p>
          <p className="text-sm text-zinc-500">de forma eficiente</p>
        </div>
        <div>
          <RegisterForm/>
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <p className="text-sm">
              Já tem uma conta?{" "}
              <a href="/login" className="text-green-700">
                Entrar
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-auto">
        <svg
          viewBox="0 0 375 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0,40 Q90,0 187,40 T375,40 L375,80 L0,80 Z"
            fill="#c8e6c9"
            opacity="0.5"
          />
          <path
            d="M0,55 Q90,20 187,55 T375,55 L375,80 L0,80 Z"
            fill="#a5d6a7"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default RegisterPage;
