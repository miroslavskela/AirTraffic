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
            $spinner.empty()
            $row.empty()
            $row.append("<p  class='error' >Geolocation is not supported by your browser</p>")
        }

    }// function that is invoked in html script when document is ready


    showError = (error) => {
        $spinner.empty()
        $row.empty()
        $row.append(`<h2  class="error">Error ${error.code}: ${error.message}</h2>`)
    } // show error function which displays error with navigator position

    

     fetchFlights = (baseUrl, lat, lng) => {
        let url = baseUrl + lat + "&lng=" + lng + "&fDstL=0&fDstU=100"
       
        $.ajax({
            url,
            dataType:"jsonp"
        })
            .done(onSuccessHandler)
            .fail(onErrorHandler)

    }// http request using jquery and ajax


    onSuccessHandler = (response) => {
       $spinner.empty()
       console.log(response);
      const adaptedData = module1.adaptData(response)
      module2.displayFlights(adaptedData)

        $(document).on('click', '.flight-field', function () {
            let flightIndex = $(this).attr("data-flight-id")
            localStorage.setItem("flightInfo", JSON.stringify(adaptedData[flightIndex]))
            location.assign('singleFlight.html')
        })
    } //function that is called on done request and it displays data and when document is ready it add eventlisteners
     //on each flight and displays onli one flight from adaptedData array
    

    onErrorHandler = (error) => {
        $spinner.empty()
        console.log(error);
        module2.displayError(error)
    }// error function 

    showLoading = () => {
      
        $spinner.append('<div class="spinner"></div>')
    }//function that attach spinner 

   

    return {
        init
    }


})(dataModule, uiModule)