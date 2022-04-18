import "./contact.css";

export const Contactpage = (() => {
  const root = document.createElement("div");
  root.classList.add("contact");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact";

  // APPEND ELEMENTS
  root.appendChild(pageTitle);

  return {
    data: root,
  };
})();
