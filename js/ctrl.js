const ctrlModule = ((module1, module2) => {
    $row = $('.row')
    $spinner = $('.spinner1')
    const init = () => {
        showLoading()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const baseUrl = module1.baseUrl
                fetchFlights(baseUrl, position.coords.latitude, position.coords.longitude)
                setInterval(function(){
                    fetchFlights(baseUrl, position.coords.latitude,position.coords.longitude);
                }, 60000)
            }, showError)
        } else if (!navigator.geolocation) {
            row.innerHTML = "<p>Geolocation is not supported by your browser</p>"
        }

    }


    showError = (error) => {
        row.innerHTML = `<h1>Error ${error.code}: ${error.message}</h1>`
    }
    const fetchFlights = (baseUrl, lat, lng) => {
        let url = baseUrl + lat + "&lng=" + lng + "&fDstL=0&fDstU=100"
       
        $.ajax({
            url,
            dataType: "jsonp"
        })
            .done(onSuccessHandler)
            .fail(onErrorHandler)

    }


    onSuccessHandler = (response) => {
       $spinner.empty()
      const adaptedData = module1.adaptData(response)
      module2.displayFlights(adaptedData)

        $(document).on('click', '.flight-field', function () {
            let flightIndex = $(this).attr("data-flight-id")
            console.log(flightIndex);
            localStorage.setItem("flightInfo", JSON.stringify(adaptedData[flightIndex]))
            location.assign('singleFlight.html')
        })
    }

    onErrorHandler = () => {
        module2.displayError
    }

    showLoading = () => {
        $spinner.append('<div class="spinner"></div>')
    }

   

    return {
        init
    }


})(dataModule, uiModule)