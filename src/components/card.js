import { $content, createHtmlElement } from "../index.js";
import "../styles/card.css";
import placeholder from "../img/placeholder.jpg";
function render(cardSrc, cardContent) {
  const $card = createHtmlElement("div", "card", ["card"], null);
  const $img = new Image();
  if (cardSrc === "placeholder") {
    $img.src = placeholder;
  } else {
    $img.src = cardSrc;
  }
  $img.alt = "";
  $card.appendChild($img);
  const $cardContainer = createHtmlElement(
    "div",
    null,
    ["cardContainer"],
    null
  );
  const $p1 = createHtmlElement("p", null, ["cardTitle"], cardContent.name);

  $cardContainer.appendChild($p1);
  const $p2 = createHtmlElement("p", null, ["cardText"], cardContent.desc);
  $cardContainer.appendChild($p2);
  $card.appendChild($cardContainer);

  return $card;
}

export { render as createCard };
