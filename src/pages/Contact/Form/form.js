import { appendChildren } from "../../../helpers/helpers";
import "./form.css";

export default function getForm()
{
    const form = document.createElement('form');
    form.classList.add('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    const fullnameField = document.createElement('input');
    fullnameField.placeholder = "Full Name";

    const emailField = document.createElement('input');
    emailField.placeholder = "Email";

    const messageField = document.createElement('textarea');
    messageField.placeholder = "Message";

    const sendBtn = document.createElement('button');
    sendBtn.textContent = "Send";

    // APPEND ELEMENTS
    appendChildren(form,[fullnameField,emailField,messageField,sendBtn]);

    return form;
}