const uiModule = (function(){
$tableBody = ('.body')


const createFlightView = (flight) => {
     const {altitude, id} = flight
        return ( `<tr>
        <td>${altitude}</td>
        <td>${id}</td>
        <td>${id}</td>
        <td class="details"><button class="waves-effect waves-light btn modal-trigger"  data-report-id="${id}">details</button></td>
        </tr>`
    )
}

const displayFlights = (flights) => {
    flights.forEach(flight => {
      const flightData  = createFlightView(flight)
      $tableBody.append(flightData)
    });
}


return{
    displayFlights
}

})()