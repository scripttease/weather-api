function apirequest() {
  var httpRequest = new XMLHttpRequest();
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=51.5&lon=-0.47&appid=b916b345d07747cfa00b95973acb1c2a"

    if (!httpRequest) {
      console.log("Cannot create XMLHTTP instance");
      return false;
    } else {
      httpRequest.onreadystatechange = handleApiData();
      httpRequest.open("GET", url, true);
      httpRequest.send();
      console.log("success!");
    };

  function handleApiData() {
    if (httpRequest.readystate === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        console.log("status 200");
      } else {
        console.log("There was a problem with the request")
      };
    };
  };
};
module.exports = apirequest;
