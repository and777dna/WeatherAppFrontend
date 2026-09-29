import { City } from "../interfaces/interfaces";

export class CityService {
    search(cities: City[], query: string, limit = 20): City[] {
        const q = query.toLowerCase();
        const found: City[] = [];

        for (const city of cities) {
            if (!city.name.toLowerCase().startsWith(q)) continue;
            found.push(city);
            if (found.length === limit) break;
        }
        return found;
    }
}