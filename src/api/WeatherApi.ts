import { Coordinate } from "../models/location";
import { ForecastResponse } from "../models/weather";
import { WeatherProvider } from "./Interfaces/WeatherProvider";

export class WeatherApi implements WeatherProvider{
    private readonly baseUrl = "https://api.openweathermap.org/data/2.5";

    constructor(private readonly apiKey: string) {}

    async getForecast(coords: Coordinate): Promise<ForecastResponse> {
        const url = `${this.baseUrl}/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${this.apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`OpenWeather error: ${response.status} ${response.statusText}`);
        }

        return await response.json() as ForecastResponse;
    }
}