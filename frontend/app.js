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

    console.log("API DATA:", data);

    data.forEach(item => {

        var geom = JSON.parse(item.geometry);

        L.geoJSON(geom)
        .bindPopup(
            "Plastic Detection ID: " + item.id
        )
        .addTo(map);

    });

});
