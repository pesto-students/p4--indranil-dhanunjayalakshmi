const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/weather/city", function handler(req, res) {
  let city = req.query.city;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  request(url, function (err, response, body) {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(body));
    }
  });
});

app.listen(8080);
