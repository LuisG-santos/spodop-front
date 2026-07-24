import { HeaderHomePage } from "./_components/header";
import { WeatherCard } from "./_components/weatherCard";
const HomePage = () => {

  return (
    <div className="p-7">
      <header className="flex">
        <HeaderHomePage/>
      </header>

      <div className=" sm:p-7">
        <WeatherCard />
      </div>
    </div>
  );
};
export default HomePage;
