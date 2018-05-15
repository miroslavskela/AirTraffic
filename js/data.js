const dataModule = (function(){
const baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?"
class Flight{
    constructor(flight){
    this.id = flight.id
    this.altitude = flight.alt
    this.model = flight.mdl
    this.ldv = flight.lastDv
}
}


const adaptData = (flights) => {
const flightsArray = flights.map((flight) => {
    return new Flight(flight)
})

return flightsArray
}


return{
    adaptData,
    baseUrl
}
})()