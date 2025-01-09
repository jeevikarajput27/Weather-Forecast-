document.addEventListener('DOMContentLoaded', function () {
    const locations = ['Delhi', 'Noida', 'Pune'];
    const weatherData = {
        'Delhi': {
            current: { temperature: 32, high: 40, low: 25, wind: 5, humidity: 60, icon: 'fas fa-sun' },
            forecast: [
                { day: 'Mon', temp: 35 },
                { day: 'Tue', temp: 37 },
                { day: 'Wed', temp: 36 },
            ]
        },
        'Noida': {
            current: { temperature: 30, high: 38, low: 24, wind: 4, humidity: 65, icon: 'fas fa-cloud-sun' },
            forecast: [
                { day: 'Mon', temp: 33 },
                { day: 'Tue', temp: 34 },
                { day: 'Wed', temp: 35 },
            ]
        },
        'Pune': {
            current: { temperature: 28, high: 34, low: 22, wind: 6, humidity: 70, icon: 'fas fa-cloud-rain' },
            forecast: [
                { day: 'Mon', temp: 29 },
                { day: 'Tue', temp: 30 },
                { day: 'Wed', temp: 31 },
            ]
        }
    };

    const locationSelect = document.getElementById('location');
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });

    locationSelect.addEventListener('change', function () {
        const selectedLocation = locationSelect.value;
        const weather = weatherData[selectedLocation];

        document.getElementById('temperature').textContent = `${weather.current.temperature}°C`;
        document.getElementById('weather-icon').innerHTML = `<i class="${weather.current.icon}"></i>`;
        document.getElementById('weather-high').textContent = `High: ${weather.current.high}°C`;
        document.getElementById('weather-low').textContent = `Low: ${weather.current.low}°C`;
        document.getElementById('weather-wind').textContent = `Wind: ${weather.current.wind} KMPH`;
        document.getElementById('weather-humidity').textContent = `Humidity: ${weather.current.humidity}%`;

        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = '';
        weather.forecast.forEach(forecast => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${forecast.day}: ${forecast.temp}°C`;
            forecastList.appendChild(listItem);
        });
    });

