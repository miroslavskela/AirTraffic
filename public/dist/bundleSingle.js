!function(){return function t(e,a,r){function o(n,s){if(!a[n]){if(!e[n]){var l="function"==typeof require&&require;if(!s&&l)return l(n,!0);if(i)return i(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var c=a[n]={exports:{}};e[n][0].call(c.exports,function(t){return o(e[n][1][t]||t)},c,c.exports,t,e,a,r)}return a[n].exports}for(var i="function"==typeof require&&require,n=0;n<r.length;n++)o(r[n]);return o}}()({1:[function(t,e,a){const{Logo:r,adaptLogo:o,baseUrl:i,baseUrl1:n}=t("./data.js"),{displaySingleFlight:s,displayError:l}=t("./ui.js");getFlightDetails=(()=>{let t=JSON.parse(localStorage.getItem("flightInfo"));t?s(t,t.man):l()}),document.querySelector(".waves-effect").addEventListener("click",function(t){t.preventDefault(),localStorage.clear(),window.history.back()}),document.addEventListener("DOMContentLoaded",()=>{getFlightDetails()})},{"./data.js":2,"./ui.js":3}],2:[function(t,e,a){class r{constructor(t,e){this.id=t.Id,this.altitude=t.Alt||"No data",this.model=t.Mdl,this.ldv=e,this.trak=t.Trak,this.from=t.From||"No data",this.to=t.To||"No data",this.man=t.Man}getImage(){return this.trak>180?"<img class='sidewest' width='20px' src='../img/planewest.png' title='West'/>":"<img class='sideeast' width='20px' src='../img/planeeast.png' title='East'/>"}}class o{constructor(t){this.logo=t.logo||"No image available"}}e.exports={Flight:r,Logo:o,adaptData:t=>{const e=t.lastDv;return t.acList.map(t=>new r(t,e))},adaptLogo:t=>t.length>1?new o(t[0]):new o(t),baseUrl:"http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=",baseUrl1:"https://autocomplete.clearbit.com/v1/companies/suggest?query="}},{}],3:[function(t,e,a){$tableBody=$(".body");e.exports={displayFlights:t=>{$tableBody.empty(),t.sort(function(t,e){return e.altitude-t.altitude}).forEach((t,e)=>{const a=((t,e)=>{const{altitude:a,id:r,trak:o}=t;return`<tr>\n        <td class="flight-field" data-flight-id=${e}>${t.getImage()}</td>\n        <td class="flight-field" data-flight-id=${e}>${a}</td>\n        <td class="flight-field" data-flight-id=${e}>${r}</td>\n        </tr>`})(t,e);$tableBody.append(a)})},displayError:()=>{const t=new Error("Could not fetch data!");$tableBody.append(`<tr><td class="error" colspan="3">${t.message}<td></tr>`)},displaySingleFlight:(t,e)=>{const a=((t,e)=>{const{model:a,from:r,to:o}=t;return`<tr>\n    <td>${a}</td>\n    <td>${r}</td>\n    <td>${o}</td>\n    <td><img width="50px" src=http://logo.clearbit.com/${e}.com  alt=${e}></td>\n    </tr>`})(t,e);$tableBody.append(a)}}},{}]},{},[1]);
//# sourceMappingURL=bundleSingle.js.map