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

    alert("Received " + data.length + " records");

    console.log(data);

});
