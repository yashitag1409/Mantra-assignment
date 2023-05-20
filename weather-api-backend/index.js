var express = require("express");
var app = express();
var cors = require("cors");

const port = 4164 || PROCESS.env.PORT;
const apiKey = "b822b9665e8438127c4916241dacf90d";

app.use(express.json());

app.use(cors());

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("Server Started Successfully at port:" + port);
});

app.post("/postWeatherApi", (req, resp) => {
  const city = req.body.city;
  if (city === null || city === "") {
    resp.send("Enter Valid City Name");
  } else {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 404) {
          resp.send(data);
        } else {
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: new Date(data.sys.sunrise * 1000).getHours(),
            Sunset: new Date(data.sys.sunset * 1000).getHours(),
            respStatus: data.cod,
          };
          resp.send(out);
        }
      });
  }
});

app.get("/getWeatherApi", (req, resp) => {
  const city = req.body.city;
  if (city === null || city === "") {
    resp.send("Enter Valid City Name");
  } else {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 404) {
          resp.send(data);
        } else {
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: data.sys.sunrise,
            Sunset: data.sys.sunset,
            respStatus: data.cod,
          };
          resp.send(out);
        }
      });
  }
});

app.put("/putWeatherApi", (req, resp) => {
  const city = req.body.city;
  if (city === null || city === "") {
    resp.send("Enter Valid City Name");
  } else {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 404) {
          resp.send(data);
        } else {
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: data.sys.sunrise,
            Sunset: data.sys.sunset,
            respStatus: data.cod,
          };
          resp.send(out);
        }
      });
  }
});
