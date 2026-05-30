alert("app.js loaded");

var map = L.map('map').setView([9, 8], 5);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '© OpenStreetMap'
}
).addTo(map);

fetch("https://plasticportal.onrender.com/plastic")
.then(response => response.json())
.then(data => {

    data.forEach(item => {

        var geom = JSON.parse(item.geometry);

        var coords = geom.coordinates;

        L.marker([
            coords[1],   // latitude
            coords[0]    // longitude
        ])
        .addTo(map)
        .bindPopup("Plastic Detection ID: " + item.id);

    });

});
