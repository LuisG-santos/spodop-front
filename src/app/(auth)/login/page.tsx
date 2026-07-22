"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoginForm } from "./_components/forms";
import { IconLeafFilled } from '@tabler/icons-react';

const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-[url(/foreground.PNG)] bg-auto opacity-70 -z-10" />
      <div className="flex flex-col pt-2 px-5 flex-1">
        <div className="flex p-4 justify-center">
          <header className="flex items-center gap-20">
            <Image
              alt="logo"
              priority
              src="/logo1.svg"
              width={300}
              height={100}
              style={{ width: "300px", height: "100px" }}
            />
          </header>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 p-2">
          <h2 className="flex text-xl font-semibold text-gray-800">
            Bem-vindo!
            <IconLeafFilled className="w-5 h-6 text-green-600 pb-2 pl-1"/>
            {/* <Leaf className="w-5 h-5 text-green-600 p-1"/> */}
          </h2>
          <p className="text-md text-zinc-500">
            Faça login para acessar sua conta e
          </p>
          <p className="text-md text-zinc-500">gerenciar suas aplicações</p>
        </div>
        <div>
          <LoginForm />
          
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <p className="text-sm">
              Não tem uma conta?{" "}
              <a href="/register" className="text-green-700 font-semibold">
                Criar conta
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
