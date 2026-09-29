import {Cities} from "../interfaces/interfaces";

export class Elements {
    //private form = document.querySelector<HTMLFormElement>('#search-form')!;
    //private input = document.querySelector<HTMLInputElement>('#city-input')!;
    //private weather = document.querySelector<HTMLDivElement>('#weather')!;
    private input = document.querySelector<HTMLFormElement>('#city-input')!;
    private list = document.querySelector<HTMLUListElement>('#list');
    private cities: Cities[] = [];

    constructor() {
        /*this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const city = this.input.value.trim();
            if (!city) return;
            this.weather.textContent = `Searching weather for ${city}...`;
        });*/
    }

    async getCities() : Promise<Cities[]> {
        this.cities ??= await fetch('/Users/andreisartin/WebstormProjects/WeatherAppFrontend/src/data/city.list.json')
            .then(res => res.json()) as Cities[];
        return this.cities;
    }
}