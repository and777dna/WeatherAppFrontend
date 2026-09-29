import {Cities} from "../interfaces/interfaces";

export class Render{
    renderCities(cities: Cities[], query: string, list: HTMLUListElement) {
        this.render(cities.filter(item => item.name.toLowerCase().includes(query)), list);
    }
    render(items: Cities[],list: HTMLUListElement) {
        const fragment = document.createDocumentFragment();
        for (const item of items) {
            const li = document.createElement('li');
            li.textContent = item.name;
            fragment.append(li);
        }
        list.replaceChildren(fragment);
    }
}