const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);
