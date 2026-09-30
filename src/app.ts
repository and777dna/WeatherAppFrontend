import { WeatherProvider } from "./api/Interfaces/WeatherProvider";
import { WeatherService } from "./services/WeatherService";
import { CitySearch } from "./ui/CitySearch";
import { CityApi } from "./api/CityApi";
import { Coordinate } from "./models/location";
import {ForecastResponse} from "./models/weather";
import {WeatherListView} from "./ui/WeatherListView";

export class App {
    private readonly weatherService = new WeatherService();
    constructor(private readonly weather: WeatherProvider) {}

    async start() {
        new CitySearch(
            new CityApi(), city => {
                console.log("selected:",city.name, city.coord);
                this.loadForecast(city.coord);
        });

    }
    private async loadForecast(coord: Coordinate) {
        try {
            const forecast = await this.weather.getForecast(coord);
            const temperatures = this.weatherService.extractTemperatures(forecast);
            new WeatherListView(temperatures).render();
        } catch (error) {
            console.error("unable to download weather forecast", error);
        }
    }
}