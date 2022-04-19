import "./menuCategories.css";

export default function createMenuCategory(_title) {
    const container = document.createElement('div');
    container.classList.add('menuCategory');

    const title = document.createElement('h2');
    title.textContent = _title;
    title.classList.add('menuCategoryTitle');

    container.appendChild(title);

    return container;
}