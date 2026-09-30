import { CityApi } from "../api/CityApi";
import { CityService } from "../services/CityService";
import { CityListView } from "./CityListView";
import { getElement } from "../utils/dom";
import {City} from "../models/location";

const MIN_QUERY_LENGTH = 2;

export class CitySearch {
    private readonly input = getElement<HTMLInputElement>("#city-input");
    private readonly list = getElement<HTMLUListElement>("#list");
    private readonly form = getElement<HTMLFormElement>("#search-form");
    private readonly cityService = new CityService();
    private readonly cityList = new CityListView(
        getElement<HTMLUListElement>("#list"),
        city => this.select(city),
        );

    constructor(
        private readonly cityApi: CityApi,
        private readonly onCitySelected: (city: City) => void
    ) {
        this.input.addEventListener("input", this.onInput);
        this.input.addEventListener("focus", this.onInput);
        this.form.addEventListener("submit", event => event.preventDefault());
    }

    private select(city: City) {
        this.input.value = city.name;
        this.cityList.clear();
        this.onCitySelected(city);
    }

    private onInput = async () => {
        const query = this.input.value.trim();
        if (query.length < MIN_QUERY_LENGTH) {
            this.list.replaceChildren();
            this.cityList.clear();
            return;
        }

        try {
            const cities = await this.cityApi.getCities();
            const found = this.cityService.search(cities, query);
            this.cityList.render(found);
        } catch (error) {
            console.error("unable to load cities", error);
        }
    };
}