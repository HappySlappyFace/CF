import { $content, createHtmlElement } from "../index.js";
import "../styles/navbar.css";
import LogoCF from "../logos/LogoCF.svg";
import LogoMTC from "../logos/LogoMTCBlack.svg";

function render() {
  const navbarItems = ["History", "Sponsors", "Planning","Register", "About us"];
  const $header = document.createElement("header");
  const $ul = document.createElement("ul");
  $ul.setAttribute("id", "headerNavbar");

  const $li = createHtmlElement("li", null, null, null);
  const $img = new Image();
  $img.id = "headerNavbarImg";
  $img.src = LogoCF;
  $img.dataset.target = "Home";
  $li.appendChild($img);
  $li.classList.add("headerNavbarChild");

  $ul.appendChild($li);

  navbarItems.forEach((item) => {
    const $li = createHtmlElement("li", null, null, item);
    $li.dataset.target = item;
    $li.classList.add("headerNavbarChild");
    $ul.appendChild($li);
  });

  const $li2 = createHtmlElement("li", null, null, null);
  const $img2 = new Image();
  $img2.id = "headerNavbarImg";
  $img2.src = LogoMTC;
  // $img2.dataset.target = "Home";
  $img2.style.fill = "red";
  $li2.appendChild($img2);
  $li2.classList.add("headerNavbarChild");

  $ul.appendChild($li2);

  $header.appendChild($ul);
  $content.appendChild($header);
}
export { render as createNavbar };
