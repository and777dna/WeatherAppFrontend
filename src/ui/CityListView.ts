import { City } from "../models/location";

export class CityListView{
    constructor(private readonly list: HTMLUListElement) {}

    render(cities: City[]) {
        const fragment = document.createDocumentFragment();
        for (const city of cities) {
            const li = document.createElement('li');
            li.textContent = city.name;
            fragment.append(li);
        }
        this.list.replaceChildren(fragment);
    }

    clear() {
        this.list.replaceChildren();
    }
}