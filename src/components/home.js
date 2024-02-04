import { $content, createHtmlElement } from "../index.js";
import { registerButton } from "./registerButton.js";
import "../styles/home.css";
import Img1 from "../img/section1.png";
import Img3 from "../img/section3.png";
import Img4 from "../img/section4.png";

function importAll(r) {
  let imgs = {};
  r.keys().map(item => { imgs[item.replace('./', "")] = r(item); });
  //r(item).slice(r(item).indexOf("/dist")) this is my attempt at removing the rest of the string
  return imgs;
}

const images = importAll(require.context('../img/pastHackathons/', false, /\.(png|jpe?g|svg)$/));
// console.log(images);

function render() {
  const $sections = createHtmlElement("div", null, ["sections"], null); 
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const $img1 = new Image();
  $img1.src = Img1;
  $img1.id = "section1Background";
  $section1.appendChild($img1);

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


  //section 2


  const $section2 = createHtmlElement("div", null, ["section2"], null);
  const $h2 = createHtmlElement("h2", null, null, "Past Hackathons");
  $section2.appendChild($h2);
  const $sectionSlideshow = createHtmlElement(
    "div",
    null,
    ["section-slideshow"],
    null
  );

  let delayIncrement = 1000; // Delay increment of 1 second
  let imageCount = 1; // To keep track of the current image number


  for (let key in images) {
    if (images.hasOwnProperty(key)) {
      let imageUrl = images[key];
      const img = new Image();

      if (imageCount === 0) {
        // Load the first image instantly
        img.src = imageUrl;
      } else {
        // Calculate the delay for each subsequent image
        let delay = imageCount * delayIncrement;
        setTimeout(() => {
          img.src = imageUrl;
        }, delay);
      }

      // Uncomment if you need to add a class to your images
      // img.classList.add("indexSection");

      $sectionSlideshow.appendChild(img);
      imageCount++; // Increment the image count
    }
  }
  $section2.appendChild($sectionSlideshow);


  // section 3


  const $section3 = createHtmlElement("div", null, ["section3"], null);
  const $img3 = new Image();
  setTimeout(() => {
          $img3.src = Img3;
  }, 200);
  
  $img3.id = "section3Background";
  $section3.appendChild($img3);
  
  const $section3Content = createHtmlElement(
    "div",
    null,
    ["section3Content"],
    null
  );
  const $h2Section3 = createHtmlElement("h2", "section3Title", null, "Sponsors and Trainers");
  $section3Content.appendChild($h2Section3);
  $section3.appendChild($section3Content);


  // section 4


  const $section4 = createHtmlElement("div", null, ["section4"], null);
  const $h2Section4 = createHtmlElement("h2", "section4Title", null, "What are you waiting for!?");
  $section4.appendChild($h2Section4);
  $section4.appendChild(registerButton());

  const $img4 = new Image();
  $img4.src = Img4;
  $img4.id = "section4Background";
  $section4.appendChild($img4);
  

  // section 5


  const $section5 = createHtmlElement("div", null, ["section5"], null);
  const $h2Section5 = createHtmlElement("h2", "section5Title", null, "About us");
  $section5.appendChild($h2Section5);


  $sections.appendChild($section1);
  $sections.appendChild($section2);
  $sections.appendChild($section3);
  $sections.appendChild($section4);
  $sections.appendChild($section5);
  $content.appendChild($sections);
  
}


export { render as createHome };
