import "./styles/reset.css";
import "./styles/fonts.css";

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

function slideshow() {
  // i don't know why this works but it does. i wanted to use the script-slideshow.js file but it didn't work

  const slideshowImages = document.querySelectorAll(".section-slideshow img");
  const nextImageDelay = 2500;
  let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;

  setInterval(nextImage, nextImageDelay);

  function nextImage() {
    // slideshowImages[currentImageCounter].style.display = "none";
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
  }
}

function home() {
  $content.innerHTML = "";
  createNavbar();
  createHome();
  slideshow(); // this is required for the slideshow animation to work
  createFooter();
}
function register() {
  $content.innerHTML = "";
  createNavbar();
  createRegister();
  createFooter();
}

// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });

// // Scroll certain amounts from current position
// window.scrollBy({
//   top: 1000, // could be negative value
//   left: 0,
//   behavior: 'smooth'
// });

// Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({
//   behavior: 'smooth'
// });

document.addEventListener("click", (e) => {
  const target = e.target.dataset.target;
  //console.log("wtf", event.target.dataset.target);
  if (target === "Home") home();
  if (target === "Sponsors") register();
  if (target === "Book") book();

  if (target === "Register") register();
  if (target === "Github") github();
});
home();
export { createHtmlElement, $content };
