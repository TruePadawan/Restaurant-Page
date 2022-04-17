export const Controller = (() => {
    const main =  document.querySelector("main");

    function createNavItem(title, link)
    {
        let anchor = document.createElement('a');
        anchor.href = "#";
        anchor.classList.add("nav-item");
        anchor.text = title;

        return anchor;
    }

    // UTILITY FUNCTION FOR APPENDING ONE OR MORE NODES TO A PARENT
    function appendChildren(parent, children)
    {
        for (let index = 0; index < children.length; index++)
        {
            parent.appendChild(children[index]);
        }
    }

    function switchTab(tabData)
    {
        console.log('switching tab');
        appendChildren(main)
    }

    return {
        createNavItem,
        appendChildren,
        switchTab
    }
})();