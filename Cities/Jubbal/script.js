const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "d5b3707067msh0de98206b9ca0dap13b8dfjsn506df6fb1a68",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options
    )
        .then((response) => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
        })
        .catch((err) => console.error(err));
}


getWeather("Jubbal")


document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        alert('not allowed');
    }
    return false;
};
document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        return false;
    }
    return false;
};
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});
