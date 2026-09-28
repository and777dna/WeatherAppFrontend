export const API_KEY = import.meta.env.API_KEY;
interface Coordinates {
    lat: number;
    lon: number;
}
export const coordinates: Coordinates = {
    lon: 47.159401,
    lat: 34.330502
}
export function apiUrl(coordinates: Coordinates): string{
    return `api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`;
}