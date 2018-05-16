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

    function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = {Page: page, Url: url};
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            window.location.href = "index.html";

        }
    }

  

    const button = document.querySelector('.waves-effect')
    button.addEventListener('click', function(event){
        event.preventDefault()
        ChangeUrl(null, 'http://127.0.0.1:5500/index.html'); 
    })

    // $button = $('.waves-effect')
    // $button.click(function(){
    //     let page = $(this).attr("href")
    //     ().load(page)
    //     return false
    // })


    return {
        initSingleFlight
    }

})(dataModule, uiModule)