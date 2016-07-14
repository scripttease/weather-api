function getLocation(cb) {
  if (navigator.geolocation) {      //if it works it is truthy
    navigator.geolocation.getCurrentPosition(cb); //note that getCurrentPosition can take an argument therefore it is a function inside the geolocation object.
  } else { 
    console.log("Geolocation is not supported by this browser.");
  };
};

function getAndShowWeather(position) {//takes fetch in here somewhere?
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  apirequestfetch(lat, lon)
    .then(function(weatherObj) {
      // console.log(weatherObj.weather[0].description);
      document.querySelector("#greet").innerHTML = "The weather in the environs of lovely " + weatherObj.name + " is alleged, at present, to be:";
      document.querySelector("#description").innerHTML = weatherObj.weather[0].description;
      document.querySelector("#icon").src = "http://openweathermap.org/img/w/" + weatherObj.weather[0].icon + ".png";
        if (weatherObj.weather[0].icon === "01d") {
          document.querySelector(".background").id = "clear-day"
        };
        if (weatherObj.weather[0].icon === "01n") {
          document.querySelector(".background").id = "clear-night"
        }
        if (weatherObj.weather[0].icon === "02d") {
          document.querySelector(".background").id = "few-clouds-day"
        }
        if (weatherObj.weather[0].icon === "02n") {
          document.querySelector(".background").id = "few-clouds-night"
        }
        if (weatherObj.weather[0].icon === "03d") {
          document.querySelector(".background").id = "scattered-clouds-day"
        }
        if (weatherObj.weather[0].icon === "03n") {
          document.querySelector(".background").id = "scattered-clouds-night"
        }
        if (weatherObj.weather[0].icon === "04d") {
          document.querySelector("body").id = "broken-clouds-day"
        }
        if (weatherObj.weather[0].icon === "04n") {
          document.querySelector(".background").id = "broken-clouds-night"
        }
        if (weatherObj.weather[0].icon === "09d") {
          document.querySelector(".background").id = "shower-rain-day"
        }
        if (weatherObj.weather[0].icon === "09n") {
          document.querySelector(".background").id = "shower-rain-night"
        }
        if (weatherObj.weather[0].icon === "10d") {
          document.querySelector(".background").id = "rain-day"
        }
        if (weatherObj.weather[0].icon === "10n") {
          document.querySelector(".background").id = "rain-night"
        }
        if (weatherObj.weather[0].icon === "11d") {
          document.querySelector(".background").id = "thunderstorm-day"
        }
        if (weatherObj.weather[0].icon === "11n") {
          document.querySelector(".background").id = "thunderstorm-night"
        }
        if (weatherObj.weather[0].icon === "13d") {
          document.querySelector(".background").id = "snow-day"       
        }
        if (weatherObj.weather[0].icon === "13n") {
          document.querySelector(".background").id = "snow-night"
        }
        if (weatherObj.weather[0].icon === "50d") {
          document.querySelector(".background").id = "mist-day"       
        }
        if (weatherObj.weather[0].icon === "50n") {
          document.querySelector(".background").id = "mist-night"      
        }
        
    });
};

function apirequestfetch(lat, lon) {
  var url =  "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b916b345d07747cfa00b95973acb1c2a"

    return fetch(url)
    .then(function(response) {
      return response.json();
      console.log(response.json);
    });
};

// module.exports = apirequestfetch;
module.exports = {
  getAndShowWeather: getAndShowWeather,
  getLocation: getLocation,
};
