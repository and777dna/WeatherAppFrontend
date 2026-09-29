import {apiUrl, coordinates} from "./config";
import {WeatherApi} from "./api/WeatherApi";
import {Elements} from "./ui/Elements";

export class App {
    constructor() {
        var url = apiUrl(coordinates);
        console.log("url", url)
        var api = new WeatherApi(url);
        api.fetchWeatherData();
        new Elements();
    }

    async start(){

    }
}