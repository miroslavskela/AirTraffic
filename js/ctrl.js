const ctrlModule = ((module1, module2) => {
    
    const init = () => {
        
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
            const baseUrl = module1.baseUrl
            console.log(position);
            fetchFlights(baseUrl, position.coords.latitude,position.coords.longitude)
        })
    } else{
        window.alert("You need to allow geolocation access")
    }
    
    // registerEventHandlers()
    }
   


const fetchFlights = (baseUrl, lat, lng) => {
    let url = "https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=" + lat + "&lng=" + lng + "&fDstL=0&fDstU=100"
   
    $.ajax({
        url,
        dataType: "jsonp"
    })
    .done(onSuccessHandler)
    .fail(onErrorHandler)
   
}


  onSuccessHandler = (response) => {
     const adaptedData = module1.adaptData(response)
     module2.displayFlights(adaptedData)  
     $(document).on('click', '.flight-field', function () {
        let flightIndex = $(this).attr("data-flight-id")
        console.log(flightIndex);
        localStorage.setItem("flightInfo",JSON.stringify(adaptedData[flightIndex]) )
        location.assign('singlePage.html')
 })
}
 
 

 onErrorHandler = () => {
    module2.displayError
}

// registerEventHandlers = (array) => {
//     $(document).on('click', '.flight-field', function () {
//         let flightIndex = $(this).attr("data-flight-id")
//         console.log(flightIndex);
//         localStorage.setItem("flightInfo",array[flightIndex] )
//         // location.assign('singlePage.html')
//     })
// }


return{
    init
}


})(dataModule, uiModule)