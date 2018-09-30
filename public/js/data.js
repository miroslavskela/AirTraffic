

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

 getImage(){
     if(this.trak > 180){
         return ("<img class='sidewest' width='20px' src='../img/planewest.png' title='West'/>")
     } else{
         return ("<img class='sideeast' width='20px' src='../img/planeeast.png' title='East'/>")
     }
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

module.exports = {Flight, Logo, adaptData, adaptLogo, baseUrl, baseUrl1}

