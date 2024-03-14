console.log("hello!");

var apiKey = "f8b59cbbbe4da08fbc787ece0ea13c32"
function Getinfo() {
  const newNameEl = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newNameEl.value + "--"
  getLatLon(newNameEl.value);

}

function getLatLon(cityName) {
  console.log("cityname", cityName);
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {

      }
    }).then(function (jsonData) {
      console.log("jsonData", jsonData)
      var lat = jsonData.city.coord.lat;
      var lon = jsonData.city.coord.lon;
      console.log('LAT', lat);
      console.log('Lon', lon);
      getWeather(lat, lon, cityName);
    })

}

function getWeather(lat, lon, cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {

      }
    }).then(function (jsonData) {
      console.log("jsonData", jsonData)
      currentDayDisplay(jsonData, cityName);
      //forcastDisplay(jsonData)
    })

}
function currentDayDisplay(current, cityName) {
  console.log(current);
  var weather = current.list[0];
  var temp = weather.main.temp;
  var humidity = weather.main.humidity;
  var wind = weather.wind.speed;

  var todayContainer = document.getElementById("today")

  var card = document.createElement('div')
  var cardBody = document.createElement('div')
  var cardTitle = document.createElement('h3')
  var cardTemp = document.createElement('p')
  var cardHumidity = document.createElement('p')
  var cardWind = document.createElement('p')

  card.setAttribute("class", "card")
  cardBody.setAttribute("class", "cardBody")
  card.appendChild(cardBody)
  cardTitle.setAttribute("class", "card-title")
  cardTemp.setAttribute("class", "card-text")
  cardHumidity.setAttribute("class", "card-text")
  cardWind.setAttribute("class", "card-text")

  cardTitle.textContent = `Current Weather for ${cityName}`;
  cardTemp.textContent = `Temp: ${temp}`;
  cardHumidity.textContent = `Humidity: ${humidity}`;
  cardWind.textContent = `Wind: ${wind}`;
  cardBody.append(cardTitle, cardTemp, cardHumidity, cardWind)

  todayContainer.append(card)


}

/*function getWeatherTemp( min, max){

  for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)+"dayMintemp").innerHTML="Min:"+Number;
  }

}*/