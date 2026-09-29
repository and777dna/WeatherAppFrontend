import { City } from "../interfaces/interfaces";
import cityListUrl from "../data/city.list.json?url";

export class CityApi {
    private citiesPromise?: Promise<City[]>;

    getCities(): Promise<City[]> {
        this.citiesPromise ??= fetch(cityListUrl).then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json() as Promise<City[]>;
        });
        return this.citiesPromise;
    }
}