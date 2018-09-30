!function(){return function t(e,o,r){function a(i,s){if(!o[i]){if(!e[i]){var d="function"==typeof require&&require;if(!s&&d)return d(i,!0);if(n)return n(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=o[i]={exports:{}};e[i][0].call(c.exports,function(t){return a(e[i][1][t]||t)},c,c.exports,t,e,o,r)}return o[i].exports}for(var n="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}}()({1:[function(t,e,o){const{Flight:r,adaptData:a,baseUrl:n}=t("./data.js"),{displayFlights:i,displaySingleFlight:s,displayError:d}=t("./ui.js");$row=$(".row"),$spinner=$(".spinner1"),$tbody=$(".body");showError=(t=>{$spinner.empty(),$tbody.empty(),$tbody.append(`<tr><td class='error' colspan='3'>Error ${t.code}:${t.message}<td></tr>`)}),fetchFlights=((t,e,o)=>{let r=t+e+"&lng="+o+"&fDstL=0&fDstU=100";$.get({url:r,dataType:"jsonp"}).done(onSuccessHandler).fail(onErrorHandler)}),onSuccessHandler=(t=>{$spinner.empty(),console.log(t);const e=a(t);i(e),document.addEventListener("click",function(t){if("flight-field"==t.target.className){t.stopPropagation();let o=t.target.getAttribute("data-flight-id");localStorage.setItem("flightInfo",JSON.stringify(e[o])),location.assign("singleFlight.html")}})}),onErrorHandler=(()=>{$spinner.empty(),d()}),showLoading=(()=>{$spinner.append('<div class="spinner"></div>')}),document.addEventListener("DOMContentLoaded",()=>{showLoading(),navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{fetchFlights(n,t.coords.latitude,t.coords.longitude),setInterval(function(){fetchFlights(n,t.coords.latitude,t.coords.longitude)},6e4)},showError):navigator.geolocation||($spinner.empty(),$tbody.empty(),$tbody.append("<tr><td class='error' colspan='3'>Geolocation is not supported by your browser<td></tr>"))})},{"./data.js":2,"./ui.js":3}],2:[function(t,e,o){class r{constructor(t,e){this.id=t.Id,this.altitude=t.Alt||"No data",this.model=t.Mdl,this.ldv=e,this.trak=t.Trak,this.from=t.From||"No data",this.to=t.To||"No data",this.man=t.Man}getImage(){return this.trak>180?"<img class='sidewest' width='20px' src='../img/planewest.png' title='West'/>":"<img class='sideeast' width='20px' src='../img/planeeast.png' title='East'/>"}}class a{constructor(t){this.logo=t.logo||"No image available"}}e.exports={Flight:r,Logo:a,adaptData:t=>{const e=t.lastDv;return t.acList.map(t=>new r(t,e))},adaptLogo:t=>t.length>1?new a(t[0]):new a(t),baseUrl:"http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=",baseUrl1:"https://autocomplete.clearbit.com/v1/companies/suggest?query="}},{}],3:[function(t,e,o){$tableBody=$(".body");e.exports={displayFlights:t=>{$tableBody.empty(),t.sort(function(t,e){return e.altitude-t.altitude}).forEach((t,e)=>{const o=((t,e)=>{const{altitude:o,id:r,trak:a}=t;return`<tr>\n        <td class="flight-field" data-flight-id=${e}>${t.getImage()}</td>\n        <td class="flight-field" data-flight-id=${e}>${o}</td>\n        <td class="flight-field" data-flight-id=${e}>${r}</td>\n        </tr>`})(t,e);$tableBody.append(o)})},displayError:()=>{const t=new Error("Could not fetch data!");$tableBody.append(`<tr><td class="error" colspan="3">${t.message}<td></tr>`)},displaySingleFlight:(t,e)=>{const o=((t,e)=>{const{model:o,from:r,to:a}=t;return`<tr>\n    <td>${o}</td>\n    <td>${r}</td>\n    <td>${a}</td>\n    <td><img width="50px" src=http://logo.clearbit.com/${e}.com  alt=${e}></td>\n    </tr>`})(t,e);$tableBody.append(o)}}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
