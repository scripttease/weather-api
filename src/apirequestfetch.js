var fetch = require("node-fetch");

function apirequestfetch(userIP) {
  var url =  "http://api.openweathermap.org/data/2.5/weather?lat=51.5&lon=-0.47&appid=b916b345d07747cfa00b95973acb1c2a"

    return fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(returnedJson) {
      console.log(returnedJson);
    }).catch(function(error) {
      console.error("There was a problem");
    });
};

module.exports = apirequestfetch;
