import { coordinates } from "./config";
import { Elements } from "./ui/Elements";
import { WeatherProvider } from "./api/Interfaces/WeatherProvider";
import {WeatherService} from "./services/WeatherService";

export class App {
    private readonly weatherService = new WeatherService();
    constructor(private readonly weather: WeatherProvider) {}

    async start() {
        new Elements();
        try {
            const forecast = await this.weather.getForecast(coordinates);
            const temperatures = this.weatherService.extractTemperatures(forecast);
        } catch (error) {
            console.error("unable to download weather forecast", error);
        }
    }
}