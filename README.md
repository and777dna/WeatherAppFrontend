# Weather App

A single page web app that shows the weather forecast for the next 5 days in 3 hour steps.
You start typing a city name, pick a city from the suggestions and the app shows a table with the temperature for every 3 hours, grouped by days. Dates and times are shown in the language of your browser.

Weather data comes from the OpenWeatherMap REST API. The list of cities for the suggestions is the `city.list.json` file from OpenWeatherMap, it's stored right inside the app (`src/data/city.list.json`).

No libraries are used, only TypeScript and Vite for running and building the app.

## How to run it

You need Node.js installed. Then run:

```
npm install
npm run dev
```

and open the address that Vite shows in the terminal.

## Supported browsers

I tested it in the latest version of Google Chrome. It should also work in the latest Firefox and Edge, because it uses only standard browser features.

## How it's built inside

I wrote the app with an OOP approach, because I wanted to use the SOLID principles. Every class has only one job, that's the S from SOLID.

- `main.ts` is the entry point, it runs after `npm run dev`. It creates the API classes and passes them into `App`.
- `app.ts` is the main class. In the constructor it gets `CityApi` and `WeatherApi`, but it knows them only through interfaces (`CityProvider` and `WeatherProvider`). That's the D from SOLID (Dependency Inversion), and passing them through the constructor is dependency injection. So if the source of cities or weather changes, I just inject a new implementation and the rest of the app stays the same. It's also handy for testing, because every part can be tested on its own or with fake data.
- `api/` has the classes that load data: `WeatherApi` gets the forecast from OpenWeatherMap, `CityApi` loads the city list from the JSON file (only once, then it keeps it in cache). The interfaces are in `api/Interfaces/`.
- `services/` is the middle layer between the data source and the UI. Services turn the data into a format that is easy to use: `CityService` searches cities by the typed text, `WeatherService` groups the forecast by days.
- `ui/` is everything on the screen. `CitySearch` works like an orchestrator: it listens to events on the page (typing in the input, clicking on a city) and calls the views. `CityListView` draws the city suggestions and `WeatherTableView` draws the forecast table.
- `models/` has the data types (city, coordinates, forecast).
- `utils/` has a small helper for finding elements on the page.

How it all works together:
you type a city → `CitySearch` gets cities from `CityApi` → `CityService` finds the matching ones → `CityListView` shows them → you click a city → `App` gets the forecast from `WeatherApi` → `WeatherService` groups it by days → `WeatherTableView` shows the table.

## Git

I used git flow for the development on GitHub:

- `main` is the stable version of the app
- `develop` is the branch where all the work comes together
- `feature/...` is a separate branch for every bigger feature, made from `develop` and merged back into `develop` when it's done

Feature branches I had:
- `feature/creating-folders-structure` for the project structure
- `feature/weatherApi` for loading the forecast from OpenWeatherMap
- `feature/weatherService` for preparing the weather data
- `feature/elements-rendering` for city search and rendering

When everything was ready, `develop` was merged into `main`.
