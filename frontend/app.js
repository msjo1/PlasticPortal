var map = L.map('map').setView([9, 8], 5);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '© OpenStreetMap'
}
).addTo(map);

fetch("https://YOUR-BACKEND-URL.onrender.com/plastic")
.then(response => response.json())
.then(data => {

    data.forEach(feature => {

        var geom = JSON.parse(feature.geometry);

        L.geoJSON(geom).addTo(map);

    });

});
