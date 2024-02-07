import { $content, createHtmlElement } from "../index.js";
import "../styles/register.css";
import Img3 from "../img/section3.png";
function render() {
  const $sections = createHtmlElement("div", null, ["sections"], null);
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const $img1 = new Image();
  $img1.src = Img3;
  $img1.id = "section1Background";
  $img1.alt = "";
  $section1.appendChild($img1);

  const $registerContent = createHtmlElement(
    "div",
    null,
    ["registerContent"],
    null
  );
  const $h1 = createHtmlElement("h1", "registerTitle", null, "CodeFiesta");
  $registerContent.appendChild($h1);
  const $h3 = createHtmlElement(
    "h3",
    "registerParagraph",
    null,
    "Sign up for the hackathon!"
  );
  $registerContent.appendChild($h3);

  //generate form including Name, Email, university name, educational level, team name, birthday and Submit button
  const $form = createHtmlElement("form", "registerForm", null, null);
  $form.setAttribute("name", "registerForm");
  $form.setAttribute("data-netlify", "true");
  $form.setAttribute("netlify", true);
  $form.setAttribute("method", "POST");
  //   $form.setAttribute("action", "/index.html");

  const $NetlifyHidden = createHtmlElement(
    "input",
    "netlifyHidden",
    null,
    null
  );
  $NetlifyHidden.type = "hidden";
  $NetlifyHidden.name = "form-name";
  $NetlifyHidden.value = "registerForm";
  $form.appendChild($NetlifyHidden);

  const $name = createHtmlElement(
    "input",
    "name",
    ["registerFormElement"],
    null
  );
  $name.type = "text";
  $name.placeholder = "Name";
  $name.name = "name";
  $form.appendChild($name);
  const $phone = createHtmlElement(
    "input",
    "phone",
    ["registerFormElement"],
    null
  );
  $phone.type = "tel";
  $phone.placeholder = "Phone Number";
  $phone.name = "phone";
  $form.appendChild($phone);
  const $email = createHtmlElement(
    "input",
    "email",
    ["registerFormElement"],
    null
  );
  $email.type = "email";
  $email.placeholder = "Email";
  $email.name = "email";
  $form.appendChild($email);
  const $university = createHtmlElement(
    "input",
    "university",
    ["registerFormElement"],
    null
  );
  $university.type = "text";
  $university.placeholder = "University";
  $university.name = "university";
  $form.appendChild($university);
  const $education = createHtmlElement(
    "select",
    "education",
    ["registerFormElement"],
    null
  );
  const $option1 = createHtmlElement("option", null, null, "High School");
  $education.appendChild($option1);
  const $option2 = createHtmlElement("option", null, null, "Undergraduate");
  $education.appendChild($option2);
  const $option3 = createHtmlElement("option", null, null, "Graduate");
  $education.appendChild($option3);
  $education.name = "education";
  $form.appendChild($education);
  const $team = createHtmlElement(
    "input",
    "team",
    ["registerFormElement"],
    null
  );
  $team.type = "text";
  $team.placeholder = "Team Name";
  $team.name = "team";
  $form.appendChild($team);
  const $birthday = createHtmlElement(
    "input",
    "birthday",
    ["registerFormElement"],
    null
  );
  $birthday.type = "date";
  $birthday.placeholder = "YYYY-MM-DD";
  $birthday.name = "birthday";
  $form.appendChild($birthday);
  const $submit = createHtmlElement(
    "input",
    "submit",
    ["registerFormElement"],
    null
  );
  $submit.type = "submit";
  $submit.value = "Submit";
  $submit.onclick = validateRegisterForm;

  //add phone number and a select with team members from 1 to 4

  const $members = createHtmlElement(
    "select",
    "members",
    ["registerFormElement"],
    null
  );
  const $option4 = createHtmlElement("option", null, null, "1");
  $members.appendChild($option4);
  const $option5 = createHtmlElement("option", null, null, "2");
  $members.appendChild($option5);
  const $option6 = createHtmlElement("option", null, null, "3");
  $members.appendChild($option6);
  const $option7 = createHtmlElement("option", null, null, "4");
  $members.appendChild($option7);
  $members.name = "members";
  $form.appendChild($members);

  $form.appendChild($submit);

  $registerContent.appendChild($form);
  $section1.appendChild($registerContent);
  $content.appendChild($section1);
}
function validateRegisterForm() {
  // Retrieve form elements using querySelector
  const name = document.querySelector("#registerForm input[name='name']").value;
  const phone = document.querySelector(
    "#registerForm input[name='phone']"
  ).value;
  const email = document.querySelector(
    "#registerForm input[name='email']"
  ).value;
  const university = document.querySelector(
    "#registerForm input[name='university']"
  ).value;
  const education = document.querySelector(
    "#registerForm select[name='education']"
  ).value;
  const team = document.querySelector("#registerForm input[name='team']").value;
  const birthday = document.querySelector(
    "#registerForm input[name='birthday']"
  ).value;
  const members = document.querySelector(
    "#registerForm select[name='members']"
  ).value;

  // Validate each field
  if (name.trim() === "") {
    alert("Name must be filled out");
    return false;
  }

  if (phone.trim() === "" || phone.length < 10) {
    // Basic validation for phone length
    alert("Phone number seems invalid.");
    return false;
  }

  if (email.trim() === "" || !email.includes("@")) {
    alert("Invalid email address");
    return false;
  }

  if (university.trim() === "") {
    alert("University must be filled out");
    return false;
  }

  // No need to validate 'education' and 'members' select fields for empty values
  // as they will have a value if options are provided in the HTML

  if (team.trim() === "") {
    alert("Team name must be filled out");
    return false;
  }

  if (birthday.trim() === "") {
    alert("Birthday must be filled out");
    return false;
  }

  // Assuming the form is valid at this point
  return true; // Form is valid
}

// Optionally, you might want to attach this validation to the form's submit event
document
  .querySelector("#registerForm")
  .addEventListener("submit", function (event) {
    const isValid = validateRegisterForm();
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

export { render as createRegister };
