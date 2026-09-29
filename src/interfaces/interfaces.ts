export interface ForecastResponse {
    list: { main: { temp: number } }[];
}
export interface Coordinate {
    lat: number;
    lon: number;
}
export interface City{
    name: string;
    coord: Coordinate;
}