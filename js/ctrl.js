const ctrlModule = (function(module1, module2){
    $row = $('.row')
    $spinner = $('.spinner1')
    $tbody = $('.body')
    

    const init = () => {
        showLoading()

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const baseUrl = module1.baseUrl

                fetchFlights(baseUrl, position.coords.latitude, position.coords.longitude)

                setInterval(function(){
                    fetchFlights(baseUrl, position.coords.latitude,position.coords.longitude);
                }, 60000) // reload every 60 seconds

            }, showError)
        } else if (!navigator.geolocation) {
            $spinner.empty()
            $tbody.empty()
            $tbody.append(`<tr><td class='error' colspan='3'>Geolocation is not supported by your browser<td></tr>`)
            
        } // if browser supports geolocation it asks for permission to track user location

    }// function that is invoked in html script when document is ready


    showError = (error) => {
        $spinner.empty()
        $tbody.empty()
        $tbody.append(`<tr><td class='error' colspan='3'>Error ${error.code}:${error.message}<td></tr>`)
    } // show error function which displays error with navigator position

    

     fetchFlights = (baseUrl, lat, lng) => {
        let url = baseUrl + lat + "&lng=" + lng + "&fDstL=0&fDstU=100"
        $.get({
            url,
            dataType: "jsonp"
        })
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }// http request using jquery and ajax


    onSuccessHandler = (response) => {
       $spinner.empty()
       console.log(response);
       const adaptedData = module1.adaptData(response) // function that returns flight object, from data module
       module2.displayFlights(adaptedData)
      
       document.addEventListener('click', function(event){
         if( event.target.className == 'flight-field'){
                event.stopPropagation()

                let target = event.target
                let flightIndex = target.getAttribute("data-flight-id")
                
                localStorage.setItem("flightInfo", JSON.stringify(adaptedData[flightIndex]))
                location.assign('singleFlight.html')
            }
        })
        /*$(document).on('click', '.flight-field', function () {
            let flightIndex = $(this).attr("data-flight-id")
            localStorage.setItem("flightInfo", JSON.stringify(adaptedData[flightIndex]))
            location.assign('singleFlight.html')
        })*/ // =============>      easier way to attach event with jquery

    } //function that is called on done request and it displays data and when document is ready it add eventlisteners
     //on each flight and displays only one flight from adaptedData array using localStorage
    

    onErrorHandler = () => {
        $spinner.empty()
        module2.displayError()
    }// error function 

    showLoading = () => {
        $spinner.append('<div class="spinner"></div>')
    }//function that attach spinner 

    return {
        init
    } //exposed function

})(dataModule, uiModule)