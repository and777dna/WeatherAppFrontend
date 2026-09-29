import { Coordinate, ForecastResponse } from "../../interfaces/interfaces";

export interface WeatherProvider {
    getForecast(coords: Coordinate): Promise<ForecastResponse>;
}