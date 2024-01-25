import { $content, createHtmlElement } from "../index.js";
import "../styles/footer.css";

function render() {
  const $footer = document.createElement("footer");
  const $h2 = createHtmlElement("h2", null, ["footerText"], "Made by ");
  const $a = createHtmlElement("a", null, ["footerSpan"], "Ayman Rebai");
  $a.style.display = "inline";
  $a.href = "https://www.linkedin.com/in/rebai-ayman/";
  $a.target = "_blank";
  $h2.appendChild($a);
  $h2.appendChild(createHtmlElement("h2", null, null, " Following "));
  const $span = createHtmlElement("span", null, ["footerSpan"], null);
  const $a2 = createHtmlElement("a", null, null, "The Odin Project");
  $a2.href = "https://www.theodinproject.com/";
  $a2.target = "_blank";
  $span.appendChild($a2);
  $h2.appendChild($span);
  $h2.appendChild(createHtmlElement("h2", null, null, " cirriculum."));
  $footer.appendChild($h2);

  const $h22 = createHtmlElement(
    "h2",
    null,
    ["footerText"],
    "All of the images are taken from "
  );
  const $span2 = createHtmlElement("span", null, ["footerSpan"], null);
  const $a3 = createHtmlElement("a", null, null, "Alexis Gabriel Aïnouz");
  $a3.href = "https://www.youtube.com/@FrenchGuyCooking";
  $a3.target = "_blank";
  $span2.appendChild($a3);
  $h22.appendChild($span2);
  $footer.appendChild($h22);
  $content.appendChild($footer);
}
export { render as createFooter };
