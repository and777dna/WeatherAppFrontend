import './style.css';
import {apiUrl, coordinates} from "./config";

const form = document.querySelector<HTMLFormElement>('#search-form')!;
const input = document.querySelector<HTMLInputElement>('#city-input')!;
const weather = document.querySelector<HTMLDivElement>('#weather')!;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (!city) return;
    weather.textContent = `Searching weather for ${city}...`;
});

var url = apiUrl(coordinates);
var api = new WeatherApi(url);
api.fetchWeatherData();