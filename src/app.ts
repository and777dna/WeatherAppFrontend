import {apiUrl, coordinates} from "./config";
import {WeatherApi} from "./api/WeatherApi";

export class App {
    constructor() {
        var url = apiUrl(coordinates);
        var api = new WeatherApi(url);
        api.fetchWeatherData();
    }

    async start(){

    }
}