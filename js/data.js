const dataModule = (function(){
const baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?"
class Flight{
    constructor(airplane){
    this.id = airplane.Id
    this.altitude = airplane.Alt
    this.model = airplane.Mdl
    this.ldv = airplane.lastDv
    this.trak = airplane.Trak
}
}


const adaptData = (flight) => {
const airplanes = flight.acList
const flightsArray = airplanes.map((airplane) => {
    return new Flight(airplane)
})

return flightsArray
}


return{
    adaptData,
    baseUrl
}
})()