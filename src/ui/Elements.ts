import {Cities} from "../interfaces/interfaces";
import {Render} from "./Render";
import cityListUrl from '../data/city.list.json?url';

export class Elements {
    //private form = document.querySelector<HTMLFormElement>('#search-form')!;
    //private input = document.querySelector<HTMLInputElement>('#city-input')!;
    //private weather = document.querySelector<HTMLDivElement>('#weather')!;
    private input = document.querySelector<HTMLFormElement>('#city-input')!;
    //private list = document.querySelector<HTMLUListElement>('#list');
    private list: HTMLUListElement;


    private cities: Cities[] = [];
    private citiesPromise?: Promise<Cities[]>;
    private render: Render;

    constructor() {
        /*this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const city = this.input.value.trim();
            if (!city) return;
            this.weather.textContent = `Searching weather for ${city}...`;
        });*/
        const list = document.querySelector<HTMLUListElement>('#list');
        if (!list) throw new Error('Element #list not found');
        this.list = list;
        this.render = new Render();
        this.input.addEventListener('input', this.eventOnInputCities);
        this.input.addEventListener('focus', this.eventOnInputCities);
    }

    getCities(): Promise<Cities[]> {
        this.citiesPromise ??= fetch(cityListUrl).then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json() as Promise<Cities[]>;
        });
        return this.citiesPromise;
    }

    private eventOnInputCities = async () => {
        const query = this.input.value.trim().toLowerCase();
        if (query.length < 2) return this.list.replaceChildren();

        const found: Cities[] = [];
        const cities = await this.getCities();
        for (const city of cities) {
            if (!city.name.toLowerCase().startsWith(query)) continue;
            if (found.push(city) === 20) break;
        }

        this.render.renderCities(cities, query, this.list);
    };
}