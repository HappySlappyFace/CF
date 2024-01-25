import { createHtmlElement } from "../index.js";
import "../styles/registerButton.css";

function render() {
    const $button = createHtmlElement("button", "registerButton", null, null);
    $button.textContent = "Register now!";
    $button.dataset.target = "Register";
    return $button;
}
export { render as registerButton };
