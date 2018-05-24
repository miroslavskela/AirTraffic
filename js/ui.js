const uiModule = (function(){
$tableBody = $('.body')



const createFlightView = (flight, i) => {
     const {altitude, id, trak} = flight
        return ( `<tr>
        <td class="flight-field" data-flight-id=${i}>${flight.getImage()}</td>
        <td class="flight-field" data-flight-id=${i}>${altitude}</td>
        <td class="flight-field" data-flight-id=${i}>${id}</td>
        </tr>`
    )
} // function that accepts flight and makes table cells of flight data and also add attr index which is used to show single flight data

const createSingleFlightView = (flight, logo) => {
    const {model, from, to} = flight
    return ( `<tr>
    <td>${model}</td>
    <td>${from}</td>
    <td>${to}</td>
    <td><img width="50px" src="${logo}" alt=${logo}></td>
    </tr>`
)
} // function that accepts flight and logo and makes table cells with those data to show info about single flight

const displayFlights = (flights) => {
    $tableBody.empty()
    const sortedArray =  flights.sort(function(a,b){
        return b.altitude-a.altitude
    })

    sortedArray.forEach((flight, i) => {
        const flightData  = createFlightView(flight,i)
        $tableBody.append(flightData)
    })
} // functions that accepts array of flights and for each flight makes flight view and append it to table body

const displaySingleFlight = (flight, logo) => {
    const flightData = createSingleFlightView(flight,logo)
    $tableBody.append(flightData) 
    
} // function that accepts one flight and create single flight view and append it to table body


const displayError = () => { 
    const errorMsg = new Error("Could not fetch data!")
    $tableBody.append(`<tr><td class="error" colspan="3">${errorMsg.message}<td></tr>`)
} // display error function 


return{
    displayFlights,
    displayError,
    displaySingleFlight
} // functions that are exposed

})()