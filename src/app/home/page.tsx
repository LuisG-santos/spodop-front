import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  CloudRain,
  MapPin,
  Thermometer,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { IconDroplet } from "@tabler/icons-react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { IconXboxXFilled } from '@tabler/icons-react';

const HomePage = () => {
  const favCondition = true;

  return (
    <div className="p-4 sm:p-7">
      <Card className="">
        <CardContent>
          {/* Div das condições atuais */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-1 sm:flex-1">
              <h3 className="font-semibold text-base">Condições atuais</h3>
              <p className="flex items-center text-gray-500 text-sm gap-1">
                <MapPin className="w-4 h-4" /> Fazenda Nunes
              </p>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  alt="clima icon"
                  src="/nuvens.png"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-4xl font-bold leading-none">24°C</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Parcialmente nublado
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200 sm:h-auto sm:w-px" />

            {/* Div das informações do clima */}
            <div className="flex flex-col gap-3 sm:flex-1 sm:justify-center">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                    <IconDroplet
                      stroke={1.5}
                      className="w-4 h-4 text-blue-500"
                    />
                  </span>
                  Umidade
                </span>
                <span className="font-semibold text-sm">68%</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                    <Wind className="w-4 h-4 text-gray-500" />
                  </span>
                  Vento
                </span>
                <span className="font-semibold text-sm">12 km/h</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                    <CloudRain className="w-4 h-4 text-blue-400" />
                  </span>
                  Chuva (6h)
                </span>
                <span className="font-semibold text-sm">0 mm</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                  </span>
                  Pressão
                </span>
                <span className="font-semibold text-sm">1015 hPa</span>
              </div>
            </div>

            {/* Janela de condições favoráveis */}
            {favCondition ? (
              <div className="bg-green-100 flex flex-col rounded-sm p-3 gap-2">
                <div className="">
                  <p className="flex text-green-700 font-bold gap-1">
                    <IconCircleCheckFilled />
                    Condições favoráveis para aplicação
                  </p>
                  <p className="text-gray-600 pl-7">
                    Janela ideal até as 18:00
                  </p>
                </div>

                <Button className="bg-white/80 text-green-700">
                  Ver detalhes <ChevronRight />
                </Button>
              </div>
            ):(
                <div className="bg-red-100 flex flex-col rounded-sm p-3 gap-2">
                <div className="">
                  <p className="flex text-red-700 font-bold gap-1">
                    <IconXboxXFilled />
                    Condições não favoráveis para aplicação
                  </p>
                  <p className="text-gray-600 pl-7">
                    Próxima janela prevista hoje ás 16:00
                  </p>
                </div>

                <Button className="bg-white/80 text-red-700">
                  Ver detalhes <ChevronRight />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default HomePage;
