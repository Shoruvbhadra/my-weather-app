const apiLocation = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'a46d4dbbf15729a535bdc7689fb4aa89';

const getWeatherInfo = city => {
    const url = `${apiLocation}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(data => updateInfo(data));
}

const searchbar = document.getElementById("search-info");
searchbar.addEventListener("click", function(){
    const cityName = document.getElementById("city-name").value ;
    getWeatherInfo(cityName);
})

const updateInfo = data =>{
    document.getElementById("name").innerText = data.name || "unknown location";
    document.getElementById("temp").innerText = data.main.temp || "unknown temp";
    document.getElementById("condition").innerText = data.weather[0].main ;
}