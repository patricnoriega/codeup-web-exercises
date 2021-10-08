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
        var html = "<div class=\"card card-body text-center\" style=\" width: 18rem; margin: 1em\">" +
            // '<div>' + reverseGeocode(data.lat.lon) + '</div>'+
            '<div>' + convertDateTime(data.daily[i].dt) + '</div>' +
            '<div>' + data.daily[i].temp.day + '</div>' +
            '<div>' + data.daily[i].temp.min + '</div>' +
            '<div>' + data.daily[i].temp.max + '</div>' +
            '<div>' + data.daily[i].temp.night + '</div>' +
            '<div>' + data.daily[i].weather[0].description + '</div>' +

            '</div>'
        $('#five-day').append(html)
    }
});

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
                var html = "<div class=\"card card-body text-center\" style=\" width: 18rem; margin: 1em\">" +
                    // '<div>' + reverseGeocode(data.lat.lon) + '</div>'+
                    '<div>' + convertDateTime(data.daily[i].dt) + '</div>' +
                    '<div>' + data.daily[i].temp.day + '</div>' +
                    '<div>' + data.daily[i].temp.min + '</div>' +
                    '<div>' + data.daily[i].temp.max + '</div>' +
                    '<div>' + data.daily[i].temp.night + '</div>' +
                    '<div>' + data.daily[i].weather[0].description + '</div>' +

                    '</div>'
                $('#five-day').append(html)
            }
        });
    })

})


