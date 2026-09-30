import { City } from "../../models/location";

export interface CityProvider {
    getCities(): Promise<City[]>;
}