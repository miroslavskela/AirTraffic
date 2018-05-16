const dataModule = (function(){

const baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat="
const baseUrl1 = "https://autocomplete.clearbit.com/v1/companies/suggest?query="

class Flight{
    constructor(flight, ldv){
    this.id = flight.Id
    this.altitude = flight.Alt || "No data"
    this.model = flight.Mdl
    this.ldv = ldv 
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
    const ldv = flight.lastDv
    const flights = flight.acList
    const flightsArray = flights.map((flight) => {
        return new Flight(flight, ldv)
})

return flightsArray
} // function that receives flights and and makes Flight object of them and returns array of flight objects

const adaptLogo = (logo) => {
    if(logo.length > 1){
    return new Logo(logo[0])
} else{
    return new Logo(logo)
}
} //function that accepts logo and makes logo object, if there is array of responses always take first item of array


return{
    adaptData,
    adaptLogo,
    baseUrl,
    baseUrl1
} //functions and datas that are exposed 
})()