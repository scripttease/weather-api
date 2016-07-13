describe("array", function() {
  it("should have two elements", function() {
    var arr = [1, 2];

    expect(arr.length).to.equal(2);
  });
});

describe("getLocation-function", function() {
  it("should return the geolocation object element 'getCurrentPosition'");
  it("should log an error if the browser doesnt support navigator.geolocation"), function() {

  });
});

// describe("latLong-function", function() {
//   it("should log the latitude and longitude from the getCurrentPosition element, which is an object"), function() {

//     var testCurrentPositionObject = {
//       data1: "string1",
//       coords: {
//         latitude: 55,
//         longitude: -55,
//       },
//       data2: "string2",
//     }

//     function latLong(testCurrentPositionObject);
//   });
// });
