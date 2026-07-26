import Image from "next/image";
import { Bell } from "lucide-react";
import { cookies } from "next/headers";

export const HeaderHomePage = async () => {
  const cookieStore = await cookies();
  const response = await fetch("https://api.spodop.com.br/user/me", {
    headers: { Cookie: cookieStore.toString() },
  });

  const user = await response.json();

  const firstName = user?.name.split(" ")[0];
  const lastName = user?.name.split(" ")[1];

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

        <span className="flex justify-center items-center shrink-0 bg-green-300/20 rounded-full w-10 h-10 text-green-800">
          <Bell strokeWidth={2.3} className="w-5 h-5" />
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-xl">Olá, {firstName} {lastName}!</h3>
        <p className="text-sm font-semibold text-gray-600">
          Aqui está o resumo da sua operação
        </p>
      </div>
    </div>
  );
};
