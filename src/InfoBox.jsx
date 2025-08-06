import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";

export default function InfoBox({ info }) {
  let HOT_URL =
    "https://w0.peakpx.com/wallpaper/377/381/HD-wallpaper-sunny-anime-green-sky-sun.jpg";
  let COLD_URL =
    "https://media.istockphoto.com/id/2160467272/photo/beautiful-frost-pattern-on-a-window-glass.jpg?s=612x612&w=0&k=20&c=ABzvUwKvPr3sHdMtYjUighOJ2MQkv-iksQVUR9a3l7U=";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 220 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp < 16 ? COLD_URL : HOT_URL
          }
          title="weather card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="for_city_icon">
              <div className="for_cityName">
                {info.city
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </div>

              <div className="for_icon">
                {info.humidity > 80 ? (
                  <ThunderstormRoundedIcon sx={{ color: "grey" }} />
                ) : info.temp < 16 ? (
                  <AcUnitRoundedIcon sx={{ color: "deepskyblue" }} />
                ) : (
                  <LightModeRoundedIcon sx={{ color: "goldenrod" }} />
                )}
              </div>
            </div>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min-Temperature = {info.tempMin}&deg;C</p>
            <p>Max-Temperature = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and it feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
