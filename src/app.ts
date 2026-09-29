import {apiUrl, coordinates} from "./config";
import {WeatherApi} from "./api/WeatherApi";
import {Elements} from "./ui/Elements";
import {WeatherProvider} from "./api/Interfaces/WeatherProvider";

export class App {
    constructor(private readonly weather: WeatherProvider) {}

    async start() {
        new Elements();
        try {
            const forecast = await this.weather.getForecast(coordinates);

        } catch (error) {
            console.error("unable to download weather forecast", error);
        }
    }
}