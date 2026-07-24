"use client";

import Image from "next/image";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { getUser } from "@/lib/api/user";
import { Bell } from "lucide-react";

export const HeaderHomePage = () => {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    getUser().then(({ data }) => {
      setUser(data);
    });
  }, [setUser]);

  const firstName = user?.name.split(" ")[0];
  return (
    <div className="pb-5 flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <Image
          alt="logo"
          priority
          src="/logo1.svg"
          width={170}
          height={61}
          style={{ width: "140px", height: "auto" }}
        />

        <span className="flex justify-center items-center shrink-0 bg-green-300/20 rounded-full w-8 h-8 text-green-800">
          <Bell className="w-5 h-5" />
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-xl">Olá, {firstName}!</h3>
        <p className="text-sm font-semibold text-gray-600">
          Aqui está o resumo da sua operação
        </p>
      </div>
    </div>
  );
};
