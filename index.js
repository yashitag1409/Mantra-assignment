var express = require("express");
var app = express();
const port = 4164 || PROCESS.env.PORT;
const apiKey = "b822b9665e8438127c4916241dacf90d";

app.use(express.json());

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("Server Started Successfully at port:" + port);
});

const code = [200, 400];
const codeText = ["Ok", "bad request"];

/* Post method calling*/

app.post("/postWeatherApi", (req, resp) => {
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
          let index = code.indexOf(data.cod);
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: data.sys.sunrise,
            Sunset: data.sys.sunset,
            respStatus: data.cod,
            respStatusMessage: codeText[index],
          };
          resp.send(out);
        }
      });
  }
});
/* /Post method calling*/
/* Get method calling*/

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
          let index = code.indexOf(data.cod);
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: data.sys.sunrise,
            Sunset: data.sys.sunset,
            respStatus: data.cod,
            respStatusMessage: codeText[index],
          };
          resp.send(out);
        }
      });
  }
});
/* /get method calling*/
/* put method calling*/

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
          let index = code.indexOf(data.cod);
          out = {
            city: city,
            weatherConditions: data.weather[0].main,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            Sunrise: data.sys.sunrise,
            Sunset: data.sys.sunset,
            respStatus: data.cod,
            respStatusMessage: codeText[index],
          };
          resp.send(out);
        }
      });
  }
});
/* put method calling*/
