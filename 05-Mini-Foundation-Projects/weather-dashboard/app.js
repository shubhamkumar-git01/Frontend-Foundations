/**
 * Async/Await Practice: Fetching Weather Data
 * We use a public mock API structure here so it runs without an API key for practice.
 * (In a real app, you'd replace the URL with OpenWeatherMap API)
 */

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        // Mocking an API call. We'll use geocode.xyz or similar public mock for demo, 
        // but for safety in this offline practice repo, we will simulate a network request with a Promise.
        
        console.log(Fetching weather for \...);
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Fake Data based on city name
        let data = null;
        if (city.toLowerCase() === "london") {
            data = { name: "London", main: { temp: 15, humidity: 82 }, wind: { speed: 12 }, weather: [{ main: "Clouds" }] };
        } else if (city.toLowerCase() === "new york") {
            data = { name: "New York", main: { temp: 24, humidity: 60 }, wind: { speed: 8 }, weather: [{ main: "Clear" }] };
        } else if (city.toLowerCase() === "mumbai") {
            data = { name: "Mumbai", main: { temp: 32, humidity: 90 }, wind: { speed: 10 }, weather: [{ main: "Rain" }] };
        }

        if (!data) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

// Also trigger on Enter key
searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
});
