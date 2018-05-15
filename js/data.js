var dataModule = (function(){
var baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?"
function Flight(flight){
    this.id = flight.id
    this.altitude = flight.alt
    this.model = flight.mdl
    this.ldv = flight.lastDv
}


function adaptData(flights){
var flightsArray = []

for(var i = 0; i < flights.length; i++){
    flightsArray[i] = new Flight(flights[i])
}

return flightsArray
}


return{
    adaptData,
    baseUrl
}
})()