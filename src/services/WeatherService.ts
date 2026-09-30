import {ForecastDay, ForecastResponse} from "../models/weather";

export class WeatherService {
    groupByDay(forecast: ForecastResponse): ForecastDay[] {
        const days = new Map<string, ForecastDay>();

        for (const item of forecast.list) {
            const time = new Date(item.dt * 1000);
            const key = time.toDateString();

            let day = days.get(key);
            if (!day) {
                day = { date: time, entries: [] };
                days.set(key, day);
            }
            day.entries.push({ time, temperature: item.main.temp });
        }
        return [...days.values()];
    }
}