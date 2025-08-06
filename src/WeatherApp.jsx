import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Lucknow",
    feelsLike: 36.07,
    humidity: 61,
    temp: 29.07,
    tempMax: 29.07,
    tempMin: 29.07,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Weather App</h1>
      <InfoBox info={weatherInfo} />
      <SearchBox updateInfo={updateInfo} />
    </div>
  );
}
