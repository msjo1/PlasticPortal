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
        
            var div = L.DomUtil.create('div', 'legend');
        
            div.innerHTML =
                '<h4>Plastic Density</h4>' +
                '<div>🔵 Low</div>' +
                '<div>🟡 Medium</div>' +
                '<div>🔴 High</div>';
        
            return div;
        };
        
        legend.addTo(map);

    });

});

fetch("https://plasticportal.onrender.com/country_summary")
.then(response => response.json())
.then(data => {

    const labels = data.map(row => row[0]);

    const values = data.map(row => row[1]);

    new Chart(
        document.getElementById("countryChart"),
        {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Plastic Detections",
                    data: values
                }]
            },
            options: {
                responsive: true
            }
        }
    );

});
