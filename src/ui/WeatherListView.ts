import { getElement } from "../utils/dom";

export class WeatherListView {
    constructor(
        private readonly temperatures: number[],
        private readonly list = getElement<HTMLUListElement>("#weather-list")
    ) {}
    render(){
        const fragment = document.createDocumentFragment();
        for (const temperature of this.temperatures) {
            const li = document.createElement('li');
            li.textContent = temperature.toString();
            fragment.append(li);
        }
        this.list.replaceChildren(fragment);
    }
}