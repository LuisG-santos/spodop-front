import { CalendarClock } from "lucide-react";
import { HeaderHomePage } from "./_components/header";
import { WeatherCard } from "./_components/weatherCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const HomePage = () => {
  return (
    <div className="p-7">
      <header className="flex">
        <HeaderHomePage />
      </header>

      <div className="flex flex-col">
        <WeatherCard />
        <div className="pt-5">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="flex justify-center items-center w-8 h-8 bg-green-200 rounded-full">
                    <CalendarClock strokeWidth={2.3} className="w-5 h-5 text-green-800"/>
                  </span>
                  Próxima janela favorável
                </span>

              </div>
            </CardHeader>
            <CardContent>
              <div className="flex">

                <div className="flex flex-1 flex-col items-start border-r border-gray-200">
                  <p className="text-sm text-gray-600">Início</p>
                  <p className="font-semibold">Hoje, 14:00</p>
                </div>

                <div className="flex flex-1 flex-col items-start pl-4">
                  <p className="text-sm text-gray-600">Fim</p>
                  <p className="font-semibold">Hoje, 18:00</p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
