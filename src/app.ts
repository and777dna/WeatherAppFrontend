import { WeatherProvider } from "./api/Interfaces/WeatherProvider";
import { WeatherService } from "./services/WeatherService";
import { CitySearch } from "./ui/CitySearch";
import { CityApi } from "./api/CityApi";
import { Coordinate } from "./models/location";
import {WeatherTableView} from "./ui/WeatherTableView";
import {getElement} from "./utils/dom";

export class App {
    private readonly weatherService = new WeatherService();
    private readonly weatherTable = new WeatherTableView(getElement<HTMLTableElement>("#forecast"));
    constructor(
        private readonly weather: WeatherProvider,
        private readonly cityApi: CityApi
    ) {}

    async start() {
        new CitySearch(this.cityApi, city => this.loadForecast(city.coord))
    }
    private async loadForecast(coord: Coordinate) {
        try {
            const forecast = await this.weather.getForecast(coord);
            this.weatherTable.render(this.weatherService.groupByDay(forecast));
        } catch (error) {
            console.error("unable to download weather forecast", error);
        }
    }
}