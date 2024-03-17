const apiKey = "29672e90d7a14f45db78b5a3ac1bb198";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  const er = document.querySelector(".error");
  const dis = document.querySelector(".weather");
  if (response.status == 404) {
    dis.style.display = "none";
    er.style.display = "block";
  } else {
    er.style.display = "none";
    dis.style.display = "block";
  }
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
  const weatherIcon = document.querySelector(".weather-icon");
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./clear.png";
  }
}

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

searchbtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkweather(searchBox.value);
  }
});

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://transloc-api-1-2.p.rapidapi.com/agencies.json",
  params: {
    callback: "call",
    geo_area: "35.80176,-78.64347|35.78061,-78.68218",
    agencies: "12",
  },
  headers: {
    "X-RapidAPI-Key": "4a313d2637mshc4519affe4c1248p1b2720jsn05c002a47330",
    "X-RapidAPI-Host": "transloc-api-1-2.p.rapidapi.com",
  },
};

/* try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
} */
async function check() {
  const response = await axios.request(options);
  console.log(response.data);
}
