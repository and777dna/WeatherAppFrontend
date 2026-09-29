import { Coordinate } from "../../models/location";
import { ForecastResponse } from "../../models/weather";


export interface WeatherProvider {
    getForecast(coords: Coordinate): Promise<ForecastResponse>;
}