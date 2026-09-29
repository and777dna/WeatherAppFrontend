import './style.css';
import {App} from "./app";
import {WeatherApi} from "./api/WeatherApi";
import {API_KEY} from "./config";


// src/main.ts
const app = new App(new WeatherApi(API_KEY));
app.start();