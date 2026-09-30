import cityListUrl from "../data/city.list.json?url";
import { City } from "../models/location";
import { CityProvider } from "./Interfaces/CityProvider";

export class CityApi implements CityProvider {
    private citiesPromise?: Promise<City[]>;

    getCities(): Promise<City[]> {
        this.citiesPromise ??= fetch(cityListUrl).then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json() as Promise<City[]>;
        });
        return this.citiesPromise;
    }
}