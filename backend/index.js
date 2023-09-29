require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(cors());
axios.defaults.headers.common["x-api-key"] = process.env.API_KEY;

const favoriteUrl = "https://api.thedogapi.com/v1/favourites";
const imagesUrl = "https://api.thedogapi.com/v1/images/search";
//process.env.API_KEY = "x-api-key";

app.get("/favorites", async (req, res) => {
  try {
    const { data } = await axios.get(`${favoriteUrl}?{"x-api-key"}`);
    res.send(data);
  } catch (error) {
    error.message = "Error getting favorites";
  }
});
app.get("/images", async (req, res) => {
  try {
    const { images } = await axios.get(`${imagesUrl}?${"x-api-key"}`);
    console.log(images);
  } catch (error) {
    error.send("Error");
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost${port}`);
});
