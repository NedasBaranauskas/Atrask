document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    var map = L.map('map').setView([54.687157, 25.279652], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([54.687157, 25.279652]).addTo(map).on('click', onClick);

    fetch('./../data/markers.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.markers[0].name);
        document.getElementById("testH2").innerText = data.markers[0].name;
    });


});



function onClick(e) {
    // alert(e.latlng);
    document.getElementById("check2").checked=true;
}