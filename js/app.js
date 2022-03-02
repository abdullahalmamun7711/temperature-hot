const API_KEY = `2b68a85ea75286255300f86c7390af9c`;
const searchTemperture = () => {
    const city = document.getElementById('city-name');
    const cityName = city.value;

    city.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));


}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperture => {
    setInnerText('city', temperture.name);
    setInnerText('temperature', temperture.main.temp);

    setInnerText('condition', temperture.weather[0].main);
    console.log(temperture);

    // set weather icon

    const url = `https://openweathermap.org/img/wn/${temperture.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}