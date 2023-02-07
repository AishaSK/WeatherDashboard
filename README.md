Server-Side APIs: Weather Dashboard

Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. To build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

shall Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities.

The base URL for your API calls will look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.

Will use `localStorage` to store any persistent data. 



credits

[Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).
 
## User Story
AS A traveler, i WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly


will Create a weather dashboard with form inputs and the following:
  * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  * When a user views the current weather conditions for that city they are presented with:
    * The city name
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
    * The wind speed
  * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
  * When a user click on a city in the search history they are again presented with current and future conditions for that city

## Mock-Up image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/10-server-side-apis-challenge-demo.png)


##links 
* The URL of the functional, deployed application:


* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project:



## screenshots 