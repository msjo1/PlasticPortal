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

    data.forEach(feature => {

        var geom = JSON.parse(feature.geometry);

        L.geoJSON(geom, {

            onEachFeature: function(feature, layer) {

                layer.bindPopup(
                    "Plastic Detection ID: " +
                    feature.id
                );

            }

        }).addTo(map);
        var heat = L.heatLayer([
                    [9.1, 8.2, 0.5],
                    [9.2, 8.3, 0.8],
                    [9.4, 8.5, 1.0]
        ]).addTo(map);
        var legend = L.control({position: 'bottomright'});

            legend.onAdd = function(map) {
            
                var div = L.DomUtil.create('div', 'info legend');
            
                div.innerHTML += '<h4>Plastic Density</h4>';
                div.innerHTML += '<i style="background:blue"></i> Low<br>';
                div.innerHTML += '<i style="background:yellow"></i> Medium<br>';
                div.innerHTML += '<i style="background:red"></i> High<br>';
            
                return div;
            };
            
            legend.addTo(map);

    });

});
