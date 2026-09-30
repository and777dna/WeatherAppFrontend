import { ForecastResponse } from "../models/weather";

export class WeatherService {
    extractTemperatures(forecast: ForecastResponse): number[] {
        console.log("forecast:",forecast);
        return forecast.list.map(item => item.main.temp);
    }
}