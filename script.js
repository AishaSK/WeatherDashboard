    function initPage() {
    var cityEl = document.getElementById("enter-city");
    var searchEl = document.getElementById("search-button");
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentTempEl = document.getElementById("temperature");
    var currentWindEl = document.getElementById("wind-speed");
  
    const historyEl = document.getElementById("history");
}

    // var fivedayEl = document.getElementById("fiveday-header");
    // var todayweatherEl = document.getElementById("today-weather");
    // let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    //my api
    const APIKey = "c5629822f950289406c173bd2e23c71d";

    function getWeather(cityName) {
        // current weather get request from open weather api
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                    console.log(JSON.stringify(myJson));
            });
                    

                // to display current weather
                const currentDate = new Date(response.data.dt * 1000);
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
                nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                
                currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
                
                    };
                
                // Get 5 day forecast for this city
                let cityID = response.data.id;
                let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
                fetch(forecastQueryURL)
                    .then(function (response) {
                        console.log(JSON.stringify(response));

                    });
                        
                        // add code for 5 day forecast data


                        //

                           
                        
                    
            
    // working on code below

//     // Get history / local storage
//     searchEl.addEventListener("click", function () {
//         const searchTerm = cityEl.value;
//         getWeather(searchTerm);
//         searchHistory.push(searchTerm);
//         localStorage.setItem("search", JSON.stringify(searchHistory));
//         renderSearchHistory();
//     })

//     // Clear History 
//     clearEl.addEventListener("click", function () {
//         localStorage.clear();
//         searchHistory = [];
//         renderSearchHistory();
//     })

//     function k2f(K) {
//         return Math.floor((K - 273.15) * 1.8 + 32);
//     }

//     function renderSearchHistory() {
//         historyEl.innerHTML = "";
//         for (let i = 0; i < searchHistory.length; i++) {
//             const historyItem = document.createElement("input");
//             historyItem.setAttribute("type", "text");
//             historyItem.setAttribute("readonly", true);
//             historyItem.setAttribute("class", "form-control d-block bg-white");
//             historyItem.setAttribute("value", searchHistory[i]);
//             historyItem.addEventListener("click", function () {
//                 getWeather(historyItem.value);
//             })
//             historyEl.append(historyItem);
//         }
//     }

//     renderSearchHistory();
//     if (searchHistory.length > 0) {
//         getWeather(searchHistory[searchHistory.length - 1]);
//     }});