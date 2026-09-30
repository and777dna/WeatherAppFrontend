import { City } from "../models/location";

export class CityListView{
    constructor(
        private readonly list: HTMLUListElement,
        private readonly onSelect: (city: City) => void
    ) {}

    render(cities: City[]) {
        const fragment = document.createDocumentFragment();
        for (const city of cities) {
            const li = document.createElement('li');
            const button = document.createElement('button');

            button.type = "button";
            button.textContent = city.name;
            button.addEventListener("click", () => this.onSelect(city));

            li.textContent = city.name;
            fragment.append(li);
            li.append(button);
        }
        this.list.replaceChildren(fragment);
    }

    clear() {
        this.list.replaceChildren();
    }
}