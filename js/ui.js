const uiModule = (function(){
$tableBody = $('.body')
const row = document.querySelector('.row')

const createFlightView = (airplane, i) => {
     const {altitude, id, trak} = airplane
        return ( `<tr class="flight-field" data-flight-id=${i}>
        <td>${trak > 180?"<img width='20px' src='../img/planewest.png'/>":"<img width='20px' src='../img/planeeast.png'/>"}</td>
        <td>${altitude}</td>
        <td>${id}</td>
        </tr>`
    )
}

const createSingleFlightView = (airplane, logo) => {
    const {model, from, to} = airplane
    return ( `<tr>
    <td>${model}</td>
    <td>${from}</td>
    <td>${to}</td>
    <td><img src="${logo}"></td>
    </tr>`
)
}

const displayFlights = (airplanes) => {
    $tableBody.empty()
   const sortedArray =  airplanes.slice().sort(function(a,b){
        return b.altitude-a.altitude
    })
    sortedArray.forEach((airplane, i) => {
      const airplaneData  = createFlightView(airplane,i)
      $tableBody.append(airplaneData)
    });
}
const displaySingleFlight = (airplane, logo) => {
    const airplaneData = createSingleFlightView(airplane,logo)
    $tableBody.append(airplaneData) 
    
}

const displayError = () => { 
    row.innerHTML = `<h3>Error</h3>`
}


return{
    displayFlights,
    displayError,
    displaySingleFlight
}

})()