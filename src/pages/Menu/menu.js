import { appendChildren } from "../../helpers/helpers";
import createMenuCategory from "./components/menuCategory/menuCategory";
import createMenuItems from "./components/menuItems/menuItems";

import "./menu.css";

export const Menupage = (() => {
  const root = document.createElement("div");
  root.classList.add("menu");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Menu";

  const menuBoard = document.createElement('div');
  menuBoard.classList.add("menuBoard");

  // MENU CATEGORIES
  const meals = createMenuCategory('Meals');
  const pastriesAndDesert = createMenuCategory('Pastries & Desert');
  const soup = createMenuCategory('Soup');
  const drink = createMenuCategory('Drink');

  // MENU ITEMS
  const mealsData = [
    {
      name: "Steak Frites",
      price: 28,
    },
    {
      name: "Chicken Confit",
      price: 10.16,
    },
    {
      name: "Bouillabaisse",
      price: 30,
    },
    {
      name: "Quiche Lorraine",
      price: 7.39,
    },
    {
      name: "Boeuf bourguignon",
      price: 28,
    },
  ];

  const pastriesAndDesertData = [
    {
      name: "Creme Brulee",
      price: 11.12
    },
    {
      name: "Baguette",
      price: 30.16
    },
    {
      name: "French Fig Tart",
      price: 10.67
    },
    {
      name: "Parisian Flan",
      price: 7.39
    },
    {
      name: "Crepes",
      price: 8.60
    }
  ];
  
  const soupData = [
    {
      name: "Garbure",
      price: 14.80
    },
    {
      name: "Lobster Bisque",
      price: 40.50
    },
    {
      name: "Soupe au pistou",
      price: 20
    },
    {
      name: "Soupe à l'ail",
      price: 7.39
    },
    {
      name: "Vichyssoise",
      price: 8.32
    }
  ];

  const drinkData = [
    {
      name: "Pineau",
      price: 28
    },
    {
      name: "Provence Rosé",
      price: 41.16
    },
    {
      name: "Chambord",
      price: 30
    },
    {
      name: "Chartreuse",
      price: 35.39
    },
    {
      name: "Cointreau Noir",
      price: 28
    }
  ];
  
  const mealsItems = createMenuItems(mealsData);
  const pastriesAndDesertItems = createMenuItems(pastriesAndDesertData);
  const soupItems = createMenuItems(soupData);
  const drinkItems = createMenuItems(drinkData);

  // APPEND ELEMENTS
  root.appendChild(pageTitle);
  root.appendChild(menuBoard);
  appendChildren(menuBoard, [meals,pastriesAndDesert,soup,drink]);
  
  meals.appendChild(mealsItems);
  pastriesAndDesert.appendChild(pastriesAndDesertItems);
  soup.appendChild(soupItems);
  drink.appendChild(drinkItems);

  return {
    data: root,
  };
  
})();
