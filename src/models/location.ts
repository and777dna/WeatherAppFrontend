export interface Coordinate {
    lat: number;
    lon: number;
}

export interface City {
    readonly name: string;
    readonly coord: Coordinate;
}