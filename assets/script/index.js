
'use strict';



const year = document.querySelector('.year');
const nameUser = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const clear = document.querySelector('.clear');
const send = document.querySelector('.send');

year.innerText = new Date().getFullYear();


const images = document.querySelectorAll('.img');

for (var i = 0; i < images.length; i++) {
  var image = images[i];
  var isScaled = false;
  
  image.addEventListener('click', function() {
    if (isScaled) {
      this.style.transform = "scale(1)";
      isScaled = false;
    } else {
      this.style.transform = "scale(1.1)";
      isScaled = true;
    }
  });
}


// Set the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aGFuc2h1YWkiLCJhIjoiY2xnMTVqYnZwMWxoODNyb2FlN2IwMndrNiJ9.KbHK-oCLYDVl1ga01Vau_A';

// Define a function to initialize the map
function initializeMap(longitude, latitude) {
  // Initialize the map
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 9
  });

  // Add a marker to the map at the device's location
  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
}

// Define a function to get the device's location
function getLocation(callback) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    callback(longitude, latitude);
  });
}

// Call the getLocation function with the initializeMap function as the callback
getLocation(initializeMap);
