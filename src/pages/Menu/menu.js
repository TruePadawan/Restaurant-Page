import "./menu.css";

export const Menupage = (() => {
  const root = document.createElement("div");
  root.classList.add("menu");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Menu";

  // APPEND ELEMENTS
  root.appendChild(pageTitle);

  return {
    data: root,
  };
})();
