var map = L.map('map').setView([9, 8], 5);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '© OpenStreetMap'
}
).addTo(map);

L.marker([6.5244, 3.3792])
.addTo(map)
.bindPopup("Lagos Test");
