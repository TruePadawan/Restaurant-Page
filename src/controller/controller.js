import { Homepage } from "../pages/Home/home";
import { Menupage } from "../pages/Menu/menu";
import { Contactpage } from "../pages/Contact/contact";

export const Controller = (() => {
    const content = document.getElementById('content');

    function createNavItem(title)
    {
        let anchor = document.createElement('a');
        anchor.href = "#";
        anchor.classList.add("nav-item");
        anchor.text = title;

        return anchor;
    }

    function deleteCurrentPage()
    {
        let currentPage = content.lastChild; // CURRENT PAGE WILL ALWAYS BE THE LAST CHILD
        content.removeChild(currentPage);
    }

    function indicateActivePage(pageTitle) {
      let navItems = document.querySelectorAll(".nav-item");

      for (let index = 0; index < 3; index++) {
        let navItem = navItems[index];

        if (navItem.text !== pageTitle) {
          navItem.className = "nav-item";
        } else {
          navItem.className = "nav-item current";
        }
      }
    }

    function switchTab(page)
    {
        const pageData = {
            Home: Homepage.data,
            Menu: Menupage.data,
            Contact: Contactpage.data
        };

        deleteCurrentPage();
        content.appendChild(pageData[page]);

        indicateActivePage(page)
    }

    return { createNavItem, switchTab }
})();