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

    console.log(data);

    data.forEach(item => {

        var geom = JSON.parse(item.geometry);

        console.log(geom);

        L.geoJSON(geom).addTo(map);

    });

});
