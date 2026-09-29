import {ForecastResponse} from "../interfaces/interfaces";

export class WeatherApi{
    private readonly url: string

    constructor(url: string) {
        this.url = url;
    }

    async fetchWeatherData(): Promise<ForecastResponse> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        const result = await response.json() as ForecastResponse;
        console.log(result);
        return result;
    } catch (error) {
            error instanceof Error ? error.message : String(error);
            throw error;
        }
    }
}