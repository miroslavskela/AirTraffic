const dataModule = (function(){
const baseUrl =  "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat="
class Flight{
    constructor(airplane){
    this.id = airplane.Id
    this.altitude = airplane.Alt || "No data"
    this.model = airplane.Mdl
    this.ldv = airplane.lastDv
    this.trak = airplane.Trak
    this.from = airplane.From || "No data"
    this.to = airplane.To || "No data"
    this.man = airplane.Man
}
}

class Logo{
    constructor(logo){
        this.logo = logo.logo || "No image available"
    }
}


const adaptData = (flight) => {
const airplanes = flight.acList
const flightsArray = airplanes.map((airplane) => {
    return new Flight(airplane)
})

return flightsArray
}

const adaptLogo = (logo) => {
    if(logo.length > 1){
    return new Logo(logo[0])
} else{
    return new Logo(logo)
}
}


return{
    adaptData,
    adaptLogo,
    baseUrl
}
})()