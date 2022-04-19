import createMenuItem from "./menuItem/menuItem";
import "./menuItems.css";

export default function createMenuItems(_menuItems) {
    const menuItems = document.createElement('ul');
    menuItems.classList.add('menuItems');

    _menuItems.forEach(item => {
        menuItems.appendChild(createMenuItem(item));
    });

    return menuItems;
}