import { Controller } from "./controller/controller";
import { loadHomepage } from "./init";

import "./index.css";

// NECESSARY ELEMENTS
const nav = document.createElement("nav");
const content = document.getElementById("content");

// CREATE NAV ITEMS
const homeNavItem = Controller.createNavItem("Home", "home");
homeNavItem.classList.add("current");

const menuNavItem = Controller.createNavItem("Menu", "menu");
const contactNavItem = Controller.createNavItem("Contact", "contact");

const navItems = [homeNavItem,menuNavItem,contactNavItem];

// FUNCTIONS
function addEventListenerToNavItems(navItems)
{
    for (let index = 0; index < navItems.length; index++) {
        let navItemText = navItems[index].text;

        navItems[index].addEventListener('click', () => {
            Controller.switchTab(navItemText);
        });
    }
}

// _INIT_
content.appendChild(nav);
addEventListenerToNavItems(navItems);

// ADD NAV ITEMS TO NAV ELEMENT
Controller.appendChildren(nav,navItems);


loadHomepage();