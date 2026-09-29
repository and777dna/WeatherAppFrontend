export interface Coordinate {
    readonly lat: number;
    readonly lon: number;
}

export interface City {
    readonly name: string;
    readonly coord: Coordinate;
}