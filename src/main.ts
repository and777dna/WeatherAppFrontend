import './style.css';
import { App } from "./app";
import { WeatherApi } from "./api/WeatherApi";
import { API_KEY } from "./config";
import {CityApi} from "./api/CityApi";

const app = new App(new WeatherApi(API_KEY), new CityApi());
app.start();