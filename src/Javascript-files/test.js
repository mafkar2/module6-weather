
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
    if (res.status === 200)
     { return res.json();
     } else {
        
    }
  }).then ( function ( jsonData){ 
     console.log( "jsonData", jsonData)
     var lat=jsonData.city.coord.lat;
     var lon=jsonData.city.coord.lon;
     console.log( 'LAT', lat);
     console.log( 'Lon', lon);
     getWeather(lat,lon);
  })

} 

function getWeather( lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(function (res) { 
    if (res.status === 200)
     { return res.json();
     } else {
        
    }
  }).then ( function ( jsonData){ 
     console.log( "jsonData", jsonData)
 
  })

}