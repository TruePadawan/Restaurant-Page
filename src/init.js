import { Homepage } from "./pages/Home/home";

export function loadHomepage()
{
    const content = document.getElementById('content');
    content.appendChild(Homepage.data[0]);
}