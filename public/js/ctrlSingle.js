const { Logo, adaptLogo, baseUrl, baseUrl1 } = require("./data.js");
const { displaySingleFlight, displayError } = require("./ui.js");
const initSingleFlight = () => {
 getFlightDetails();
}; // function that is invoked in html script when document is ready

getFlightDetails = () => {
  let singleFlightData = JSON.parse(localStorage.getItem("flightInfo"));
  if (singleFlightData) {
    displaySingleFlight(singleFlightData, singleFlightData.man);
  } else {
    displayError();
  }
}; // function that parse data from localstorage and displays single flight data and logo which is received as response parameter

const button = document.querySelector(".waves-effect");
button.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  window.history.back();
}); // go back to all flight page, but with reloading data

document.addEventListener("DOMContentLoaded", initSingleFlight);


