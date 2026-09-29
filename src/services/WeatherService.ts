import { ForecastResponse } from "../interfaces/interfaces";

export class WeatherService {
    extractTemperatures(forecast: ForecastResponse): number[] {
        return forecast.list.map(item => item.main.temp);
    }
}