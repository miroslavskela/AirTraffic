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

    // const promise1 = new Promise((resolve, reject) => {
    //     const singleFlightData = JSON.parse(localStorage.getItem('flightInfo'))
    //     if (singleFlightData) {
    //         resolve(fetchLogo(singleFlightData.man))
    //     } else {
    //         reject('<h1>Error</h1>')
    //     }
    // })

    return {
        initSingleFlight
    }

})(dataModule, uiModule)