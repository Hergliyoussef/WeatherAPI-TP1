const axios = require("axios");

const API_KEY = "e49efb2dedd15e55dd4a834e996bedb8";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

axios.get(url)
  .then((response) => {
    const data = response.data;
    console.log(`Ville : ${city}`);
    console.log(`Description : ${data.weather[0].description}`);
    console.log(`Température : ${data.main.temp}°C`);
    console.log(`Humidité : ${data.main.humidity}%`);
  })
  .catch((error) => {
    console.error("Erreur :", error.message);
  });
