const redIcon = new L.Icon({
        iconUrl: '/favicon.svg',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
});

// Reverse GeoJSON coordinates for Leaflet (lon, lat → lat, lon)
const leafletCoordinates = [coordinates[1], coordinates[0]];  // [lat, lon]

// Initialize the map
const map = L.map('map').setView(leafletCoordinates, 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker(leafletCoordinates, { icon: redIcon }).addTo(map)
    .bindPopup(`
    <h5>${listings.location}</h5>
    <p>Exact location will be provided after booking.</p>
    `)
    .openPopup();

L.circle(leafletCoordinates, {
    color: 'transparent',          // Border color
    fillColor: '#f03',     // Fill color
    fillOpacity: 0.3,
    radius: 800            // In meters
}).addTo(map)