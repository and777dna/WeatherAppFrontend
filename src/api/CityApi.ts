import cityListUrl from "../data/city.list.json?url";
import { City } from "../models/location";

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