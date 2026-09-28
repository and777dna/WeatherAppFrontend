export interface ForecastResponse {
    list: { main: { temp: number } }[];
}
export interface Coordinates {
    lat: number;
    lon: number;
}