
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

geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken = mapBoxKey,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});

map.addControl(geocoder);
//---button for zoom control---
map.addControl(new mapboxgl.NavigationControl());


geocode("17619 La Cantera Pkwy #208, San Antonio, TX 78257",mapBoxKey).then(function (results){
    var popUp = new mapboxgl.Popup()
        .setHTML("<em>Bakudan Ramen-</em> When I go here for ramen it is usually for happy hour because they have a good selection of half price appetizers and drinks and the ramen is well worth it my order is the shrimp tempura with a side of the san antonio bomb for extra flavor. ")

    new mapboxgl.Marker(
        {
        color: 'yellow',
    }
    )
        .setLngLat(results)
        .setPopup(popUp)
        .addTo(map)
})

geocode("Våghustorget 1, 702 10 Örebro, Sweden", mapBoxKey).then(function (results){
    var popUp2 = new mapboxgl.Popup()
        .setHTML("<em>Dine Burgers-</em> When I went to Sweden my friend took me to his cousins restaurant in the center of Orebro telling me that they serve the best burgers in the city with a side of sweet potato fries with a truffle butter sauce for dipping. being the newest hotspot in town it was undoubtedly packed people waiting outside to get in. however we walked straight in dapping up his cousin and immediately was sat a table and was taken care of the whole night.   ")

    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popUp2)
        .addTo(map)

    map.flyTo({center:results})

})

geocode("Carrer del Correu Vell, 3, 08002 Barcelona, Spain", mapBoxKey).then(function (results) {
    var popUp2 = new mapboxgl.Popup()
        .setHTML("<em>La Maison-</em> I had traveled to Barcelona not so long ago and when walking around the Gothic quarter admiring the architecture of the beautiful city and all the cathedrals in Barcelona we  became a bit hungry so instead of going to a 'tourist eatery' we walked the back alleys and stumbled upon a tiny bar that serves great food. we ordered a brew with our order of tapas and ate well into the night. ")

    new mapboxgl.Marker(
        {
            color: 'red'
        }
    )
        .setLngLat(results)
        .setPopup(popUp2)
        .addTo(map)

    map.flyTo({center: results})
})

var restaurants = [
    {
        name: "Bakudan Ramen",
        location: "The Rim, San Antonio TX"

    },
    {
        name:"Dine",
        location:"Orebro, Sweden"
    },
    {
        name: "La Maison",
        location:"Gothic Quarter, Barcelona Spain"
    },
]
restaurants.forEach(function (restaurant,index) {
    console.log("restaurant #" + (index +1));
    console.log("name: " + restaurant.name);
    console.log("location: " + restaurant.location);
    console.log("-------");




});