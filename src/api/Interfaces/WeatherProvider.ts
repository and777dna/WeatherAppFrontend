import { Coordinates, ForecastResponse } from "../../interfaces/interfaces";

export interface WeatherProvider {
    getForecast(coords: Coordinates): Promise<ForecastResponse>;
}