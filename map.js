

const mymap = L.map('mapid').setView([-122.7314, 45.4387], 10);

// mymap.setView([-122.7314, 45.4387], 12);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWMtbG91ZGVybWlsayIsImEiOiJjazdkcTl4dTIwMG1pM2xteHNsMXg4ZHd6In0.lqe-uHwNgXXgXnvgMWH7sg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXNhYWMtbG91ZGVybWlsayIsImEiOiJjazdkcTl4dTIwMG1pM2xteHNsMXg4ZHd6In0.lqe-uHwNgXXgXnvgMWH7sg'
}).addTo(mymap);

// const marker = L.marker([51.5, -0.09]).addTo(mymap);


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "PCC Sylvania",
        "amenity": "College Campus",
        "popupContent": "This is where I go to school"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-122.7314, 45.4387]
    }
};

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(mymap);