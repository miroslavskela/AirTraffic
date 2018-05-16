const ctrlSingleFlightModule = ((module1, module2) => {
    
    
    const initSingleFlight = () => {

    const singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
    const manufacturer = singleFlightData.man
    
    fetchLogo(manufacturer)
      


    } // function that is invoked in html script when document is ready

    /*const fetchLogo = (name) => {
        let url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`
        $.ajax({
            url,
            dataType: "json"
        })
            .done(onSuccessHandler)
            .fail(onErrorHandler)
            
    }*/

  

    getFlightDetails = (response) => {
        const singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
        module2.displaySingleFlight(singleFlightData,response)  
    }// function that parse data from localstorage and displays single flight data and logo which is received as response parameter

    fetchLogo = (name) => {
        const baseUrl1 = module1.baseUrl1;
        return fetch(`${baseUrl1}${name}`)
        .then((response) =>{
            return response.json()
        })
        .then((response) => {
          const adaptedLogo =  module1.adaptLogo(response)
          return adaptedLogo.logo
        }).then((response) => {
           return getFlightDetails(response)
        }).catch((error) => {
            module2.displayError()
        })
    } // fetch logo and then invoke single flight details function with logo as argument


    


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