$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherKey,
    q:     "San Antonio, US",
    // id: 4726286,
    lat: 29.4241,
    lon: -98.4936,
    units: "imperial"
}).done(function(data) {
    console.log(data);
});

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: openWeatherKey,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);
});

$.ajax("https://api.openweathermap.org/data/2.5/weather").done(function(data, status, jqXhr) {
    data.forEach(function (data) {
        var html = "<div>" +
            '<div>'+ data.name + '</div>'+
            '<div>' + data.main + '</div>'+
            '<div>' + data.visibility + '</div>'+
            '<div>'+ data.weather + '</div>'+
            '</div>'
        $('#current-conditions').append(html)
    })
})
