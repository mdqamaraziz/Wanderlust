document.addEventListener("DOMContentLoaded", function () {

    const mapDiv = document.getElementById("map");
    if (!mapDiv) return;

    // GeoJSON format → [longitude, latitude]
    const lat = coordinates[1];
    const lng = coordinates[0];

    // Initialize map
    const map = L.map("map").setView([lat, lng], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
    }).addTo(map);

    console.log("Coordinates:", lat, lng);

    // Marker
    const marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(locationName || "Listing Location")
        .openPopup();

});