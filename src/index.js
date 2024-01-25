import "./styles/reset.css";

import { createNavbar } from "./components/navbar.js";
import { createFooter } from "./components/footer.js";
import { createHome } from "./components/home.js";
import { createRegister } from "./components/registerPage.js";

import "./styles/style.css";


const $content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((clase) => element.classList.add(clase));
  if (content) element.textContent = content;
  return element;
}
function home() {
  $content.innerHTML = "";
  createNavbar();
  createHome();
  createFooter();
}
function register() {
  $content.innerHTML = "";
  createNavbar();
  createRegister();
  createFooter();
}

function github() {
  window.open("https://github.com/HappySlappyFace", "_blank");
}

document.addEventListener("click", (e) => {
  const target = e.target.dataset.target;
    // console.log("wtf", event.target.dataset.target);
  if (target === "Home") home();
  if (target === "Sponsors") register();
  if (target === "Book") book();
  if (target === "Contact") contact();
  if (target === "Github") github();
});
home();
export { createHtmlElement, $content };
