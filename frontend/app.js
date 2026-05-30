var map = L.map('map').setView([9, 8], 5);

L.tileLayer(
'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
{
    attribution: 'Esri'
}
).addTo(map);

fetch("https://plasticportal.onrender.com/plastic")
.then(response => response.json())
.then(data => {

    data.forEach(item => {

        var geom = JSON.parse(item.geometry);

        L.geoJSON(geom)
        .bindPopup(
            "Plastic Detection ID: " + item.id
        )
        .addTo(map);

    });

});
