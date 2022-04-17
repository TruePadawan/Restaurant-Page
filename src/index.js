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
function indicateActivePage(title)
{
    for (let index = 0; index < 3; index++)
    {
        let navItem = navItems[index];

        if (navItem.text !== title)
        {
            navItem.className = "nav-item";
        }
        else
        {
            navItem.className = "nav-item current";
        }
    }
}

function addEventListenerToNavItems(navItems)
{
    for (let index = 0; index < navItems.length; index++) {
        navItems[index].addEventListener('click', () => {
            indicateActivePage(navItems[index].text)
        });
    }
}

// _INIT_
content.appendChild(nav);
addEventListenerToNavItems(navItems);

// ADD NAV ITEMS TO NAV ELEMENT
Controller.appendChildren(nav,navItems);


loadHomepage();