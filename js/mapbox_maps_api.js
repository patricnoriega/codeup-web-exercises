
mapboxgl.accessToken = mapBoxKey;
console.log(mapBoxKey);

var map = new mapboxgl .Map(
    {
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-98.598568, 29.609497],
        zoom: 15
    }
)
geocode("17619 La Cantera Pkwy #208, San Antonio, TX 78257",mapBoxKey).then(function (results){
    var popUp = new mapboxgl.Popup()
        .setHTML("<em>Bakudan Ramen</em>")

    new mapboxgl.Marker(
        {
        color: 'yellow',
        draggable:true
    }
    )
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)
})