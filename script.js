var temperature = document.querySelector("#temperature");
var pressure = document.querySelector("#pressure");
var climate = document.querySelector("#climate");
var humidty = document.querySelector("#humidity");
var weather = document.querySelector("#weather");
var sunshine = document.querySelector("#sunshine");
var sunset = document.querySelector("#sunset");
var latitude = document.querySelector("#latitude");
var longitude = document.querySelector("#longitude");
var wind = document.querySelector("#windspeed");
var winddeg = document.querySelector("#winddeg");

var stbtn = document.querySelector("#stbtn");
var cityname = document.querySelector("#cityname");
var s_temperature = document.querySelector("#s-temperature");
var s_pressure = document.querySelector("#s-pressure");
var s_climate = document.querySelector("#s-climate");
var s_humidty = document.querySelector("#s-humidity");
var s_weather = document.querySelector("#s-weather");
var s_sunshine = document.querySelector("#s-sunshine");
var s_sunset = document.querySelector("#s-sunset");
var s_latitude = document.querySelector("#s-latitude");
var s_longitude = document.querySelector("#s-longitude");
var s_wind = document.querySelector("#s-windspeed");
var s_winddeg = document.querySelector("#s-winddeg");
var s_error = document.querySelector("#s-error");

const apiKey = "b822b9665e8438127c4916241dacf90d";

const currentWeather = async () => {
  //   console.log("1");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=jabalpur&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 404) {
        // console.log("2");
        error.innerHTML = "Code : " + data.cod + "Message : " + data.message;
      } else {
        // console.log("3");
        console.log(data);
        let sr_hours_min =
          new Date(data.sys.sunrise * 1000).getHours() +
          " : " +
          new Date(data.sys.sunrise * 1000).getMinutes();
        let ss_hours_min =
          new Date(data.sys.sunset * 1000).getHours() +
          " : " +
          new Date(data.sys.sunset * 1000).getMinutes();
        latitude.innerHTML = data.coord.lat;
        longitude.innerHTML = data.coord.lon;
        temperature.innerHTML =
          " City : Jabalpur   Temperature : " + data.main.temp + "&deg;C";
        pressure.innerHTML = data.main.pressure;
        climate.innerHTML = data.weather[0].main;
        // humidty.innerHTML = data.main.humidity;
        weather.innerHTML = data.weather[0].description;
        sunshine.innerHTML = sr_hours_min + " AM";
        sunset.innerHTML = ss_hours_min + " PM";
        wind.innerHTML = data.wind.speed;
        winddeg.innerHTML = data.wind.deg;
        // console.log("4");
      }
    })
    .catch((err) => alert("Enter Valid City"));
};

currentWeather();

stbtn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 404) {
        error.innerHTML = "Code : " + data.cod + "Message : " + data.message;
      } else {
        console.log(data);
        let sr_hours_min =
          new Date(data.sys.sunrise * 1000).getHours() +
          " : " +
          new Date(data.sys.sunrise * 1000).getMinutes();
        let ss_hours_min =
          new Date(data.sys.sunset * 1000).getHours() +
          " : " +
          new Date(data.sys.sunset * 1000).getMinutes();
        s_latitude.innerHTML = data.coord.lat;
        s_longitude.innerHTML = data.coord.lon;
        s_temperature.innerHTML =
          ` City : ${cityname.value}  Temperature : ` +
          data.main.temp +
          "&deg;C";
        s_pressure.innerHTML = data.main.pressure;
        s_climate.innerHTML = data.weather[0].main;
        s_weather.innerHTML = data.weather[0].description;
        s_sunshine.innerHTML = sr_hours_min + "AM";
        s_sunset.innerHTML = ss_hours_min + "PM";
        s_wind.innerHTML = data.wind.speed;
        s_winddeg.innerHTML = data.wind.deg;
      }
    });
});
