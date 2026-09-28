class WeatherApi{
    private url: string

    constructor(url: string) {
        this.url = url;
    }

    async fetchWeatherData() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        const result = await response.json();
        console.log(result);
    } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
    }
    }
}