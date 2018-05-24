const ctrlSingleFlightModule = (function(module1, module2){
    
    const initSingleFlight = () => {
      let singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
      let manufacturer = singleFlightData.man

      fetchLogo(manufacturer)
      } // function that is invoked in html script when document is ready

    getFlightDetails = (response) => {
        let singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
        module2.displaySingleFlight(singleFlightData,response)  
    }// function that parse data from localstorage and displays single flight data and logo which is received as response parameter

    fetchLogo = (name) => {
        let url = `${module1.baseUrl1}${name}`;

        $.get({
            url,
        })
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    } 

onSuccessHandler = (response) =>{
    const adaptedLogo = module1.adaptLogo(response)
    if(adaptedLogo){
        getFlightDetails(adaptedLogo.logo)    
    }


}

onErrorHandler = () => {
    module2.displayError()
}
    


    const button = document.querySelector('.waves-effect')
    button.addEventListener('click', function(event){
        event.preventDefault()
        
        // history.pushState(null, '','http://127.0.0.1:5500/index.html' ); ============> doesn't work, just change te path in address bar
        window.history.back()
    }) // go back to all flight page, but with reloading data

   


    return {
        initSingleFlight
    } //exposed function

})(dataModule, uiModule)