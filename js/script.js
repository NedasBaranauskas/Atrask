document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    var map = L.map('map').setView([54.687157, 25.279652], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //addMarker(map,54.687157, 25.279652);
    //addMarker(map,0);
    //L.marker([54.687157, 25.279652]).addTo(map).on('click', onClick);

    // document.getElementById("star3").checked=true;

    fetch('http://localhost:5500/markers')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.markers[0].name);
    });

    fetch('http://localhost:5500/markerDetails?id=' + 2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.markers[0].name);
    });

    for (let i = 0; i < 2; i++) {
    
      fetch('./../data/markers.json')
      .then(response => response.json())
      .then(data => {
          console.log(data.markers[i].coords);
          addMarker(map,data.markers[i].coords[0],data.markers[i].coords[1],i);
      });
    //  addMarker(map,lat,lon);
    }

});

const onClick = (index) => {
  return (e) => {
    // alert(e.latlng);
    
    fetch('./../data/markers.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.markers[index]);
      document.getElementById("name").innerText=data.markers[index].name;
      document.getElementById("info").innerText=data.markers[index].info;
      document.getElementById("category").innerText=data.markers[index].category[0];
      document.getElementById("category").style.background=data.markers[index].category[1];
      document.getElementById("thumbnail").src=data.markers[index].thumbnail;
      document.getElementById("rating").innerText=data.markers[index].rating;
    });

    document.getElementById("check2").checked=true;
}
}

function addMarker(map,lat,lon,index){
    L.marker([lat,lon]).addTo(map).addEventListener('click', onClick(index));
}

function addPlace(){
    var modal = document.getElementById("langas");
    // var dezute = document.getElementById("deze");
    var btn = document.getElementById("mygtukas");

    var span = document.getElementsByClassName("close")[0];
    var submitt = document.getElementById("submitas");

modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}

submitt.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}