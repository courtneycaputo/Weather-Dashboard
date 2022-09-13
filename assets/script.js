var searchInput = document.getElementById("search-input");
var searchForm = document.getElementById("search-form");

function fetchWeather(lat,lon,city){
    var apiURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=709eaff6487fadf0c26e0bc441b8c854`

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
            var forecastDate = moment().format("M/D/YYYY");
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
        
        console.log(dailyForecast)

        for(var i = 0; i <=5; i++){
            var currentForecastTemp = document.createElement("p");
            // const date = new Date();
            // date.setDate(date.getDate() + i);
            // add to text content if i figure it out: ${date} 
            currentForecastTemp.classList = 'col-2 border';
            currentForecastTemp.textContent = ` Temp: ${dailyForecast[i].temp.day} Wind: ${dailyForecast[i].wind_speed} Humidity: ${dailyForecast[i].humidity}`
            // console.log(dailyForecast[i].temp.day)
            currentForecastContainer.appendChild(currentForecastTemp);
            

            // var currentForecastWind = document.createElement("p"[i]);
            // currentForecastWind.classList = 'col-2';
            // currentForecastWind.textContent = `Wind: ${dailyForecast[i].wind_speed}`
            // currentForecastContainer.appendChild(currentForecastWind);



            
        }


        
    })
}




searchForm.addEventListener("submit",function(event) {
    event.preventDefault(); 
    
    var search = searchInput.value.trim()
    var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=709eaff6487fadf0c26e0bc441b8c854`

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

for(var i = 0; i <=5; i++){
    const date = new Date();
    date.setDate(date.getDate() + i);
    console.log(date);
}