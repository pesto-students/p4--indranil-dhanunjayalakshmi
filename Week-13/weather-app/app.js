const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function cityWeather(url) {
  return new Promise((resolve, reject) => {
    request(url, function (err, response, body) {
      if (err) {
        resolve(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

app.get("/weather/city", function handler(req, res) {
  let city = req.query.city;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  cityWeather(url).then((weather) => {
    res.send(weather);
  });
});

app.get("/weather/forecast", function handler(req, res) {
  let city = req.query.city;

  let ts = req.query.cnt;

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${ts}&appid=${apiKey}`;

  cityWeather(url).then((weather) => {
    res.send(weather);
  });
});

app.get("/weather/history", function handler(req, res) {
  let city = req.query.city;

  let ts = req.query.cnt;

  let dt = req.query.dt;

  let url = `https://history.openweathermap.org/data/2.5/history/city?q=${city}&units=metric&start=${dt}&cnt=${ts}&appid=${apiKey}`;

  cityWeather(url).then((weather) => {
    res.send(weather);
  });
});

app.get("/weather/cities", async function handler(req, res) {
  if (req.query.q) {
    let cities = req.query.q.split(",");

    const cityPromisies = cities.map((city) => {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      return cityWeather(url);
    });
    let citiesWeather = await Promise.all(cityPromisies);
    res.send(citiesWeather);
  } else {
    res.send("Please enter the cities names");
  }
});

app.listen(8080);
