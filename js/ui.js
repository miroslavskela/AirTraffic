const uiModule = (function(){
$tableBody = $('.body')
const row = document.querySelector('.row')

const createFlightView = (airplane, i) => {
     const {altitude, id, trak} = airplane
        return ( `<tr class="flight-field" data-flight-id=${i}>
        <td>${altitude}</td>
        <td>${id}</td>
        <td>${trak > 180?"<img width='20px' src='../img/planewest.png'/>":"<img width='20px' src='../img/planeeast.png'/>"}</td>
        </tr>`
    )
}

const displayFlights = (airplanes) => {
   const sortedArray =  airplanes.slice().sort(function(a,b){
        return b.altitude-a.altitude
    })
    sortedArray.forEach((airplane, i) => {
      const airplaneData  = createFlightView(airplane,i)
      $tableBody.append(airplaneData)
    });
}

const displayError = () => {
   
    row.innerHTML(`<h3>Error</h3>`)
}


return{
    displayFlights,
    displayError
}

})()