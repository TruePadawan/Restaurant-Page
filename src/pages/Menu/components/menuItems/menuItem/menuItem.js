import "./menuItem.css";

export default function createMenuItem(_item) {
    const item = document.createElement('li');
    item.classList.add('menuItem');
    item.textContent = `${_item.name} - €${_item.price}`;

    return item;
}