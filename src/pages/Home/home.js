import { Controller } from "../../controller/controller";

import "./home.css";

export const Homepage = (() => {
  const root = document.createElement("div");
  root.classList.add("home");

  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  const restaurantNameDiv = document.createElement("div");
  restaurantNameDiv.classList.add("restaurant-name");

  const courtesy = document.createElement("p");
  courtesy.classList.add("courtesy");
  courtesy.textContent = "Dîner Délicieusement";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Menu";

  const homepageBGImgDiv = document.createElement("div");
  homepageBGImgDiv.classList.add("homepage-image");

  // APPEND ELEMENTS
  root.appendChild(mainContentDiv);
  root.appendChild(homepageBGImgDiv);
  mainContentDiv.appendChild(restaurantNameDiv);
  mainContentDiv.append(menuBtn);
  restaurantNameDiv.appendChild(courtesy);

  // EVENT HANDLERS
  menuBtn.addEventListener('click', () => {
    Controller.switchTab("Menu");
  });

  return {
    data: root,
  };
  
})();
