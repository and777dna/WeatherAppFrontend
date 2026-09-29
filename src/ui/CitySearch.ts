import { CityApi } from "../api/CityApi";
import { CityService } from "../services/CityService";
import { CityListView } from "./CityListView";
import { getElement } from "../utils/dom";

const MIN_QUERY_LENGTH = 2;

export class CitySearch {
    private readonly input = getElement<HTMLInputElement>("#city-input");
    private readonly list = getElement<HTMLUListElement>("#list");
    private readonly cityService = new CityService();
    private readonly cityList = new CityListView(getElement<HTMLUListElement>("#list"));

    constructor(private readonly cityApi: CityApi) {
        this.input.addEventListener("input", this.onInput);
        this.input.addEventListener("focus", this.onInput);
    }

    private onInput = async () => {
        const query = this.input.value.trim();
        if (query.length < MIN_QUERY_LENGTH) {
            this.list.replaceChildren();
            return;
        }

        try {
            const cities = await this.cityApi.getCities();
            const found = this.cityService.search(cities, query);
            this.cityList.clear();
            this.cityList.render(found);
        } catch (error) {
            console.error("unable to load cities", error);
        }
    };
}