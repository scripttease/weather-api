function getLocation(cb) {
  console.log("222");
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
      console.log(weatherObj);
    });
};

function apirequestfetch(lat, lon) {
  var url =  "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b916b345d07747cfa00b95973acb1c2a"
  console.log(url);

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
