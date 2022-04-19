import getInfoList from "./InfoList/InfoList";
import getForm from "./Form/form";

import "./contact.css";

export const Contactpage = (() => {
  const root = document.createElement("div");
  root.classList.add("contact");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact";

  const infoAndContactFormDiv = document.createElement('div');

  const infoList = getInfoList();
  const contactForm = getForm();

  // APPEND ELEMENTS
  root.appendChild(pageTitle);
  root.appendChild(infoAndContactFormDiv);

  infoAndContactFormDiv.appendChild(infoList);
  infoAndContactFormDiv.appendChild(contactForm);
  
  return {
    data: root,
  };
})();
