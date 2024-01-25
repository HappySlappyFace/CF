import { $content, createHtmlElement } from "../index.js";
import { registerButton } from "./registerButton.js";
import "../styles/home.css";
import Img1 from "../img/section1.png";
// import Img2 from "./img/chefImg.jpg";

function render() {
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const img = new Image();
  img.src = Img1;
  img.id = "section1Background";
  $section1.appendChild(img);

  const $section1Content = createHtmlElement(
    "div",
    null,
    ["section1Content"],
    null
  );

  const $h1 = createHtmlElement(
    "h1",
    "section1Title",
    null,
    "¡24 Hour Hackathon!"
  );
  $section1Content.appendChild($h1);

  const $h3 = createHtmlElement(
    "h3",
    "section1Paragraph",
    null,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  $section1Content.appendChild($h3);

  $section1Content.appendChild(registerButton());

  $section1.appendChild($section1Content);
  const $section2 = createHtmlElement("div", null, ["section2"], null);
  const img2 = new Image();
  // img2.src = Img2;
  img2.classList.add("indexSection2");
  $section2.appendChild(img2);

  $content.appendChild($section1);
  $content.appendChild($section2);
}
export { render as createHome };
