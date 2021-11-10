const API_KEY = "ccc6eb7e825a6548dd8ca51ac9a1a092";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const city = document.querySelector("#weather span:last-child");
      const name = date.name;
      const weather = date.weather[0].main;
      weatherContainer.innerText = `${weather} / ${date.main.temp}`;
      city.innerText = name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
