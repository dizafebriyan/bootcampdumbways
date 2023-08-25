// script.js

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const bounds = L.latLngBounds([51.49, -0.16], [51.52, -0.06]);
map.setMaxBounds(bounds);

const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("Ini adalah lokasi yang bisa di klik.").openPopup();

function onMarkerClick(e) {
  alert("Anda mengklik marker pada koordinat: " + e.latlng.toString());
}

marker.on('click', onMarkerClick);
