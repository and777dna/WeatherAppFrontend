import { ForecastResponse } from "../api/WeatherApi";

class WeatherService {
    private _weatherJson: ForecastResponse;
    private weatherForecast: number[] = [];
    constructor(weatherJson: ForecastResponse) {
        this._weatherJson = weatherJson;
    }

    extractValuesToArray() : number[]{
        this.weatherForecast = this._weatherJson.list.map(item => item.main.temp);
        return this.weatherForecast;
    }
}