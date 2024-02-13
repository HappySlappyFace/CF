import { $content, createHtmlElement } from "../index.js";
import { registerButton } from "./registerButton.js";
import { createCard } from "./card.js";
import "../styles/home.css";

import Img1 from "../img/section1.png";
import Img3 from "../img/section3.png";
import Img4 from "../img/section4.png";
import SponsorData from "../json/sponsors.json";

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import {Navigation,Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//mobile detection function
window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
console.log(window.mobileCheck());
function importAll(r) {
  let imgs = {};
  r.keys().map((item) => {
    imgs[item.replace("./", "")] = r(item);
  });
  //r(item).slice(r(item).indexOf("/dist")) this is my attempt at removing the rest of the string
  return imgs;
}

const images = importAll(
  require.context("../img/pastHackathons/", false, /\.(png|jpe?g|svg)$/)
);

const aboutUsImages = importAll(
  require.context("../img/aboutUs/", false, /\.(png|jpe?g|svg)$/)
);
console.log(aboutUsImages);

function render() {
  const $sections = createHtmlElement("div", null, ["sections"], null);
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const $img1 = new Image();
  if (window.mobileCheck()) {
    $img1.src = require("../img/section1Mobile.png");
  } else {
    $img1.src = require("../img/section1.png");
  }

  $img1.id = "section1Background";
  $img1.alt = "";
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
    null,
    ["section1Paragraph"],
    "Join us for a thrilling coding experience where creativity meets competition. Embrace the challenge, collaborate with fellow enthusiasts and showcase your skills. Don't miss out on the opportunity to code, learn, and innovate. Unleash your coding potential, collaborate with fellow innovators, and win amazing prizes! "
  );
  const $h3_2 = createHtmlElement(
    "span",
    null,
    ["section1Paragraph", "section1OrangeSpan"],
    "Register now for just 30TND before spots fill up!"
  );
  $h3.appendChild($h3_2);
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
      img.alt = "";
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
  $img3.alt = "";
  $img3.alt = "Background";
  setTimeout(() => {
    $img3.src = Img3;
  }, 200);

  $img3.id = "section3Background";
  $section3.appendChild($img3);

  const $img32 = new Image();
  $img32.alt = "";
  $img32.alt = "Background";
  setTimeout(() => {
    $img32.src = Img3;
  }, 200);
  $img32.id = "section3Background2";
  $section3.appendChild($img32);

  const $section3Content = createHtmlElement(
    "div",
    null,
    ["section3Content"],
    null
  );

  const $h2Section3 = createHtmlElement(
    "h2",
    "section3Title",
    null,
    "Sponsors and Trainers"
  );
  $section3Content.appendChild($h2Section3);
  const $section3ContentCards = createHtmlElement(
    "div",
    null,
    ["section3ContentCards"],
    null
  );
  // console.log(SponsorData.person);

  SponsorData.people.forEach((sponsor) => {
    let img3;
    try {
      img3 = require(`../img/sponsors/${sponsor.ImgSrc}`);
    } catch (e) {
      // console.log(e);
      img3 = "placeholder";
    } finally {
      $section3ContentCards.appendChild(createCard(img3, sponsor.details));
    }
  });

  $section3Content.appendChild($section3ContentCards);
  $section3.appendChild($section3Content);

  // section 4

  const $section4 = createHtmlElement("div", null, ["section4"], null);
  const $h2Section4 = createHtmlElement(
    "h2",
    "section4Title",
    null,
    "What are you waiting for!?"
  );
  $section4.appendChild($h2Section4);
  $section4.appendChild(registerButton());

  const $img4 = new Image();
  $img4.src = Img4;
  $img4.id = "section4Background";
  $img4.alt = "";
  $section4.appendChild($img4);

  // section 5

  const $section5 = createHtmlElement("div", null, ["section5"], null);
  const $h2Section5 = createHtmlElement(
    "h2",
    "section5Title",
    null,
    "About us"
  );

  const $swiper = createHtmlElement("div", null, ["swiper"], null);
  const $swiperWrapper = createHtmlElement("div", null, ["swiper-wrapper"], null);

  const delayIncrementAboutUs=500;

  let imageCountAboutUs = 0; // To keep track of the current image number
  for (let key in aboutUsImages) {
    if (aboutUsImages.hasOwnProperty(key)) {
      let imageUrl = aboutUsImages[key];
      const img = new Image();
      img.alt = "";
      img.classList.add("swiper-slide");
      img.classList.add("section5SlideImages");
      if (imageCountAboutUs === 0) {
        img.src = imageUrl;
      } else {
        let delay = imageCountAboutUs * delayIncrementAboutUs;
        setTimeout(() => {
          img.src = imageUrl;
        }, delay);
      }
      
      $swiperWrapper.appendChild(img);
      imageCountAboutUs++; // Increment the image count


    }
  }

  $swiper.appendChild($swiperWrapper);
  const $swiperPagination = createHtmlElement("div", null, ["swiper-pagination"], null);

  $swiper.appendChild($swiperPagination);

  const $swiperButtonNext = createHtmlElement("div", null, ["swiper-button-next"], null);
  const $swiperButtonPrev = createHtmlElement("div", null, ["swiper-button-prev"], null);

  $swiper.appendChild($swiperButtonNext);
  $swiper.appendChild($swiperButtonPrev);
  $section5.appendChild($h2Section5);
  $section5.appendChild($swiper);

  setTimeout(() => 
  {
    var swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination, Autoplay], // NOTE! configure Swiper to use modules
      speed: 400,
      loop: false,
      
      autoResize: false,
      slidesPerView : 'auto',
      initialSlide : 2,
      loop : true,
      loopedSlides : 20,

      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }, 20);
  //section appending

  $sections.appendChild($section1);
  $sections.appendChild($section2);
  // $sections.appendChild($section3);
  $sections.appendChild($section4);
  $sections.appendChild($section5);
  $content.appendChild($sections);
}

export { render as createHome };
