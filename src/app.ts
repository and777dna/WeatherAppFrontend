import { coordinates } from "./config";
import { WeatherProvider } from "./api/Interfaces/WeatherProvider";
import { WeatherService } from "./services/WeatherService";
import { CitySearch } from "./ui/CitySearch";
import { CityApi } from "./api/CityApi";

export class App {
    private readonly weatherService = new WeatherService();
    constructor(private readonly weather: WeatherProvider) {}

    async start() {
        var city = new CitySearch(new CityApi(), city => console.log("selected:",city.name, city.coord));
        try {
            const forecast = await this.weather.getForecast(coordinates);
            const temperatures = this.weatherService.extractTemperatures(forecast);
        } catch (error) {
            console.error("unable to download weather forecast", error);
        }
    }
}