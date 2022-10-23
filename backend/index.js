require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(cors());
axios.defaults.headers.common["x-api-key"] = process.env.API_KEY;

const favoriteUrl = "https://api.thedogapi.com/v1/favourites";
process.env.API_KEY = "x-api-key";

app.get("/favorites", async (req, res) => {
  try {
    const { data } = await axios.get(`${favoriteUrl}?{"x-api-key"}`);
    console.log(data);
    res.send(data);
  } catch (error) {
    error.message = "Error getting favorites";
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost${port}`);
});
