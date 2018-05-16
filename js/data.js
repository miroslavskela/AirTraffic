const dataModule = (function(){
const baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat="
class Flight{
    constructor(flight){
    this.id = flight.Id
    this.altitude = flight.Alt || "No data"
    this.model = flight.Mdl
    this.ldv = flight.lastDv
    this.trak = flight.Trak
    this.from = flight.From || "No data"
    this.to = flight.To || "No data"
    this.man = flight.Man
}
} // Flight object

class Logo{
    constructor(logo){
        this.logo = logo.logo || "No image available"
    }
} // Logo object


const adaptData = (flight) => {
const flights = flight.acList
const flightsArray = flights.map((flight) => {
    return new Flight(flight)
})

return flightsArray
} // function that receives flights and and makes Flight object of them

const adaptLogo = (logo) => {
    if(logo.length > 1){
    return new Logo(logo[0])
} else{
    return new Logo(logo)
}
} //function that accepts logo and makes logo object


return{
    adaptData,
    adaptLogo,
    baseUrl
} //functions that are exposed 
})()