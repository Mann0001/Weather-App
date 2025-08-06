import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`
      );
      let jsonRespose = await response.json();
      console.log(jsonRespose);
      let result = {
        city: city,
        feelsLike: jsonRespose.main.feels_like,
        humidity: jsonRespose.main.humidity,
        temp: jsonRespose.main.temp,
        tempMax: jsonRespose.main.temp_max,
        tempMin: jsonRespose.main.temp_min,
        weather: jsonRespose.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      console.log(city);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          size="small"
          className="searchfield"
        />
        &nbsp;
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {error && <p>no such place exists</p>}
      </form>
    </div>
  );
}
