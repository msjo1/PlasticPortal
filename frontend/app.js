alert("app.js loaded");

fetch("https://plasticportal.onrender.com/plastic")
.then(response => response.json())
.then(data => {

    alert("Data received");

    console.log(data);

});
