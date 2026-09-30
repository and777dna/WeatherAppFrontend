export interface ForecastItem {
    dt: number;
    main: { temp: number };
}

export interface ForecastResponse {
    list: ForecastItem[];
}

export interface ForecastEntry {
    readonly time: Date;
    readonly temperature: number;
}

export interface ForecastDay {
    readonly date: Date;
    readonly entries: ForecastEntry[];
}