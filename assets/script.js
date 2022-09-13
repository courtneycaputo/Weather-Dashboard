var searchInput = document.getElementById("search-input");
var searchForm = document.getElementById("search-form");

function fetchWeather(lat,lon,city){
    var apiURL = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=c81ab4993a62219f9361b2e335f5086c`

    console.log("lat", lat);
    console.log("lon", lon)
    
    fetch(apiURL).then(function(response){
    return response.json()
 

    }).then(function(data){
        
        // Current Weather
            // To display city that was searched and date
            var currentCity = document.createElement("h1");
            var currentWeather = document.getElementById("current-weather");
            var currentDate = document.createElement("p"); 
            currentCity.textContent = city;
            currentDate.textContent = moment().format("M/D/YYYY");
            currentWeather.appendChild(currentCity);
            currentWeather.appendChild(currentDate);
       
            var tempF = data.current.temp;
            var windMph = data.current.wind_speed;
            var humidity = data.current.humidity;
            var uvi = data.current.uvi;

            // Temperature
            var currentTemp = document.createElement("p")
            var currentWeather = document.getElementById("current-weather");
            currentTemp.textContent = `TEMP: ${tempF} F`;
            currentWeather.appendChild(currentTemp);

            // Humidity
            var currentHumidity = document.createElement("p")
            var currentWeather = document.getElementById("current-weather");
            currentHumidity.textContent = `Humidity: ${humidity}%`;
            currentWeather.appendChild(currentHumidity);

            // Wind Speed
            var currentWind = document.createElement("p")
            var currentWeather = document.getElementById("current-weather");
            currentWind.textContent = `Wind Speed: ${windMph}`;
            currentWeather.appendChild(currentWind);

            // UV Index
            var currentUvi = document.createElement("p")
            var currentWeather = document.getElementById("current-weather");
            currentUvi.textContent = `UVI: ${uvi}`;
            currentWeather.appendChild(currentUvi);

        // 5 Day Forecast
            // 5 Day Forecast Header
            var forecast = document.createElement("h1")
            var currentForecastContainer = document.getElementById("current-forecast");
            forecast.textContent = "5 day Forecast";
            currentForecastContainer.appendChild(forecast);

            var dailyForecast = data.daily;
                              
            var currentForecastTemp = document.createElement("p");
            currentForecastTemp.classList = 'col-2 card bg-primary text-white';
            currentForecastTemp.textContent = `Temp: ${dailyForecast[0].temp.day} Wind: ${dailyForecast[0].wind_speed} Humidity: ${dailyForecast[0].humidity}`
            currentForecastContainer.appendChild(currentForecastTemp);
            
            var currentForecastTemp = document.createElement("p");
            currentForecastTemp.classList = 'col-2 card bg-primary text-white';
            currentForecastTemp.textContent = ` Temp: ${dailyForecast[1].temp.day} Wind: ${dailyForecast[1].wind_speed} Humidity: ${dailyForecast[1].humidity}`
            currentForecastContainer.appendChild(currentForecastTemp);

            var currentForecastTemp = document.createElement("p");
            currentForecastTemp.classList = 'col-2 card bg-primary text-white';
            currentForecastTemp.textContent = ` Temp: ${dailyForecast[2].temp.day} Wind: ${dailyForecast[2].wind_speed} Humidity: ${dailyForecast[2].humidity}`
            currentForecastContainer.appendChild(currentForecastTemp);

            var currentForecastTemp = document.createElement("p");
            currentForecastTemp.classList = 'col-2 card bg-primary text-white';
            currentForecastTemp.textContent = ` Temp: ${dailyForecast[3].temp.day} Wind: ${dailyForecast[3].wind_speed} Humidity: ${dailyForecast[3].humidity}`
            currentForecastContainer.appendChild(currentForecastTemp);

            var currentForecastTemp = document.createElement("p");
            currentForecastTemp.classList = 'col-2 card bg-primary text-white';
            currentForecastTemp.textContent = ` Temp: ${dailyForecast[4].temp.day} Wind: ${dailyForecast[4].wind_speed} Humidity: ${dailyForecast[4].humidity}`
            currentForecastContainer.appendChild(currentForecastTemp);

                 
    })

    
}


searchForm.addEventListener("submit",function(event) {
    event.preventDefault(); 
    
    var search = searchInput.value.trim()
    var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=c81ab4993a62219f9361b2e335f5086c`

    fetch(apiURL).then(function(response){
        return response.json()

    }) .then(function(data){
        if(data.length == 0) {
            alert("location not found")
        }
        else {
            var lat = data[0].lat;
            var lon =data[0].lon;
            var city = data[0].name;
            fetchWeather(lat,lon,city);
        }
    })

    searchInput.value = "";

})



