document.addEventListener('DOMContentLoaded', function () {
    const charts = {};

    const ctxOverview = document.getElementById('overviewChart').getContext('2d');
    const ctxCrops = document.getElementById('cropsChart').getContext('2d');
    const ctxWeather = document.getElementById('weatherChart').getContext('2d');
    const ctxSoil = document.getElementById('soilChart').getContext('2d');
    const ctxMarkets = document.getElementById('marketsChart').getContext('2d');

    charts.overviewChart = new Chart(ctxOverview, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Overview Data',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });

    charts.cropsChart = new Chart(ctxCrops, {
        type: 'bar',
        data: {
            labels: ['Wheat', 'Corn', 'Rice', 'Barley', 'Soy'],
            datasets: [{
                label: 'Crop Yield',
                data: [35, 49, 60, 70, 46],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        }
    });

    charts.weatherChart = new Chart(ctxWeather, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Temperature',
                data: [30, 25, 27, 29, 33, 35],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        }
    });

    charts.soilChart = new Chart(ctxSoil, {
        type: 'doughnut',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
            datasets: [{
                label: 'Soil Nutrients',
                data: [40, 30, 30],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        }
    });

    charts.marketsChart = new Chart(ctxMarkets, {
        type: 'bar',
        data: {
            labels: ['Region A', 'Region B', 'Region C', 'Region D'],
            datasets: [{
                label: 'Market Prices',
                data: [85, 69, 90, 95],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        }
    });

    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    const marker = L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    // Add click event listener to the map
    map.on('click', function(e) {
        const { lat, lng } = e.latlng;
        alert(`You clicked the map at Latitude: ${lat}, Longitude: ${lng}`);
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    });
});
