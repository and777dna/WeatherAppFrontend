import { ForecastDay, ForecastEntry } from "../models/weather";

export class WeatherTableView {
    private readonly dayFormat = new Intl.DateTimeFormat(undefined, { weekday: "long", day: "numeric", month: "long" });
    private readonly timeFormat = new Intl.DateTimeFormat(undefined, { timeStyle: "short" });
    private readonly temperatureFormat = new Intl.NumberFormat(undefined, { style: "unit", unit: "celsius", maximumFractionDigits: 0 });

    constructor(private readonly table: HTMLTableElement) {}

    render(days: ForecastDay[]) {
        const body = document.createElement("tbody");
        for (const day of days) {
            body.append(this.createDayRow(day.date));
            for (const entry of day.entries) {
                body.append(this.createEntryRow(entry));
            }
        }
        this.table.replaceChildren(body);
    }

    private createDayRow(date: Date): HTMLTableRowElement {
        const row = document.createElement("tr");
        const cell = document.createElement("th");
        cell.colSpan = 2;
        cell.textContent = this.dayFormat.format(date);
        row.append(cell);
        return row;
    }

    private createEntryRow(entry: ForecastEntry): HTMLTableRowElement {
        const row = document.createElement("tr");
        const time = document.createElement("td");
        const temperature = document.createElement("td");
        time.textContent = this.timeFormat.format(entry.time);
        temperature.textContent = this.temperatureFormat.format(entry.temperature);
        row.append(time, temperature);
        return row;
    }
}