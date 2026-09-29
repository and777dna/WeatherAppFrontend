import {Coordinates} from "./interfaces/interfaces";

const API_KEY = "869e641967132b11c26a9d63f98d8270";
export const coordinates: Coordinates = {
    lon: 47.159401,
    lat: 34.330502
}
export function apiUrl(coordinates: Coordinates): string{
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`;
}