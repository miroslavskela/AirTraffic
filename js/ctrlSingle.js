const ctrlSingleFlightModule = ((module1, module2) => {
    const initSingleFlight = () => {

    const singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
    const manufacturer = singleFlightData.man
       fetchLogo(manufacturer)
      


    }
    // const fetchLogo = (name) => {
    //     let url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`
    //     $.ajax({
    //         url,
    //         dataType: "json"
    //     })
    //         .done(onSuccessHandler)
    //         .fail(onErrorHandler)
            
    // }

    
    onSuccessHandler = (response) => {
        console.log(response);
        const adaptedLogo = module1.adaptLogo(response)
        return adaptedLogo.logo
    }
    onErrorHandler = () => {
        module2.displayError
    }

    getFlightDetails = (response) => {
        const singleFlightData = JSON.parse(localStorage.getItem('flightInfo')) 
        module2.displaySingleFlight(singleFlightData,response)
       
    }
    fetchLogo = (name) => {
        return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`)
        .then((response) =>{
            return response.json()
        })
        .then((response) => {
          const adaptedLogo =  module1.adaptLogo(response)
          console.log(adaptedLogo);
          return adaptedLogo.logo
        }).then((response) => {
           return getFlightDetails(response)
        })
    }

    const button = document.querySelector('.waves-effect')
    button.addEventListener('click', function(){
     
        window.history.pushState({},"",'http://127.0.0.1:5500/index.html')
      
    })

    return {
        initSingleFlight
    }

})(dataModule, uiModule)