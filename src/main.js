import './style.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#city-input');
const weather = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (!city) return;
    weather.textContent = `Searching weather for ${city}...`;
});