// $.get("https://api.openweathermap.org/data/2.5/weather", {
//     APPID: openWeatherKey,
//     q:     "San Antonio, US",
//     // id: 4726286,
//     lat: 29.4241,
//     lon: -98.4936,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
//     var html = "<div>" +
//         '<div>' + data.name + '</div>'+
//         '<div>' + data.main.temp + '</div>'+
//         '<div>' + data.main.temp_max + '</div>'+
//         '<div>' + data.main.temp_min + '</div>'+
//         '<div>' + data.weather[0].main + '</div>'+
//         '<div>' + data.weather[0].description + '</div>'+
//         '<div>' + data.weather[0].icon + '</div>'+
//         '</div>'
//     $('#current-conditions').append(html)
// });
// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: openWeatherKey,
//     lat: 29.423017,
//     lon: -98.48527,
//     units: "imperial"
// }).done(function (data) {
//     console.log(data)
//     let weatherForecast = ''
//     const renderForecast = function (data) {
//         console.log(data)
//         if (weatherForecast === '') {
//             for (let i = 0; i < data.daily.length; i++) {
//                 weatherForecast += `<div class="col card text-center"><img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="weatherIMG"><p>${data.daily[i].weather[0].description}</p>
//                     <p>Humidity: ${data.daily[i].humidity}%</p>
//                     <p>Wind Speed: ${data.daily[i].wind_speed} MPH</p>
//                     <p>Temp: ${data.daily[i].temp.day}°</p>
//                     <p>Low: ${data.daily[i].temp.min}°</p>
//                     <p>High: ${data.daily[i].temp.max}°</p></div>`
//             }
//             $('#five-day').append(weatherForecast)
//         } else {
//             $('#five-day').replaceWith('<div class="col card text-center" id="forecastDays"></div>')
//             weatherForecast = ''
//             for (let j = 0; j < data.daily.length; j++) {
//                 weatherForecast += `
//                     <div class="card">
//                         <img src="http://openweathermap.org/img/w/${data.daily[j].weather[0].icon}.png" alt="weatherIMG">
//                         <p>${data.daily[j].weather[0].description}</p>
//                            '<h6>Date:' + convertDateTime(data.daily[i].dt) + '</h6>'
// //             '<div>Today: ' + data.daily[i].temp.day + '</div>'
//                         <p>Temp: ${data.daily[j].temp.day}°</p>
//                         <p>Low: ${data.daily[j].temp.min}°</p>
//                         <p>High: ${data.daily[j].temp.max}°</p>
//                     </div>`
//             }
//             $('#five-day').append(weatherForecast)
//
//         }
//     }
// })
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial"
}).done(function (data) {
    console.log('5 day forecast', data);
    // console.log('currentDay', data.daily[0])
    // console.log('currentDay', data.daily[4])
    console.log(data.daily[0].weather[0].description)
    console.log(data.daily[0].temp.day)
    for (var i = 0; i <= 4; i++) {
        var html = "<div class=\"row col card card-body text-center\" style=\" width: 18rem; margin: 1em;\">" +
            // '<div>' + reverseGeocode(data.lat.lon) + '</div>'+
            '<h6>Date:' + convertDateTime(data.daily[i].dt) + '</h6>' +
            '<div>Today: ' + data.daily[i].temp.day + '</div>' +
            '<div>' +    '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '.png">' + '</img>'  + '</div>' +
            '<div>L: ' + data.daily[i].temp.min + '</div>' +
            '<div>H: ' + data.daily[i].temp.max + '</div>' +
            '<div>Tonight: ' + data.daily[i].temp.night + '</div>' +
            '<div>Conditions: ' + data.daily[i].weather[0].description + '</div>' +

            '</div>'
        $('#five-day').append(html)
    }
})

mapboxgl.accessToken = mapBoxKey;
console.log(mapBoxKey);
var map = new mapboxgl.Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.4870, 29.4284],
        zoom: 10
    }
)

function convertDateTime(dt) {
    var dtMilliseconds = dt * 1000
    var dateObject = new Date(dtMilliseconds)
    return dateObject.toLocaleString()
}

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var city = $("input").val()
    geocode(city, mapBoxKey).then(function (coordinates) {
        console.log(coordinates)
        map.flyTo({
            center: coordinates
        })
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherKey,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial"
        }).done(function (data) {
            console.log('5 day forecast', data);
            // console.log('currentDay', data.daily[0])
            // console.log('currentDay', data.daily[4])
            console.log(data.daily[0].weather[0].description)
            console.log(data.daily[0].temp.day)
            //clear old weather
            $("#five-day").html('')
            for (var i = 0; i <= 4; i++) {
                var html = "<div class=\"row col card card-body text-center\" style=\" width: 18rem; margin: 1em;\">" +
                    // '<div>' + reverseGeocode(data.lat.lon) + '</div>'+
                    '<h6>Date:' + convertDateTime(data.daily[i].dt) + '</h6>' +
                    '<div>Today: ' + data.daily[i].temp.day + '</div>' +
                    '<div>' +    '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '.png">' + '</img>'  + '</div>' +
                    '<div>L: ' + data.daily[i].temp.min + '</div>' +
                    '<div>H: ' + data.daily[i].temp.max + '</div>' +
                    '<div>Tonight: ' + data.daily[i].temp.night + '</div>' +
                    '<div>Conditions: ' + data.daily[i].weather[0].description + '</div>' +

                    '</div>'
                $('#five-day').append(html)
            }
        });
    })

})


