export interface ForecastItem {
    main: { temp: number };
}

export interface ForecastResponse {
    list: ForecastItem[];
}