import { $content, createHtmlElement } from "../index.js";
import "../styles/register.css";
function render() {
    //generate form including Name, Email, university name, educational level, team name, birthday and Submit button
    const $form = createHtmlElement("form", "registerForm", null, null);
    $form.setAttribute("data-netlify", "true");
    const $name = createHtmlElement("input", "name", ["registerFormElement"], null);
    $name.type = "text";
    $name.placeholder = "Name";
    $form.appendChild($name);
    const $phone = createHtmlElement("input", "phone", ["registerFormElement"], null);
    $phone.type = "tel";
    $phone.placeholder = "Phone Number";
    $form.appendChild($phone);
    const $email = createHtmlElement("input", "email", ["registerFormElement"], null);
    $email.type = "email";
    $email.placeholder = "Email";
    $form.appendChild($email);
    const $university = createHtmlElement("input", "university", ["registerFormElement"], null);
    $university.type = "text";
    $university.placeholder = "University";
    $form.appendChild($university);
    const $education = createHtmlElement("select", "education", ["registerFormElement"], null);
    const $option1 = createHtmlElement("option", null, null, "High School");
    $education.appendChild($option1);
    const $option2 = createHtmlElement("option", null, null, "Undergraduate");
    $education.appendChild($option2);
    const $option3 = createHtmlElement("option", null, null, "Graduate");
    $education.appendChild($option3);
    $form.appendChild($education);
    const $team = createHtmlElement("input", "team", ["registerFormElement"], null);
    $team.type = "text";
    $team.placeholder = "Team Name";
    $form.appendChild($team);
    const $birthday = createHtmlElement("input", "birthday", ["registerFormElement"], null);
    $birthday.type = "date";
    $form.appendChild($birthday);
    const $submit = createHtmlElement("input", "submit", ["registerFormElement"], null);
    $submit.type = "submit";
    $submit.value = "Submit";
    //add phone number and a select with team members from 1 to 4
    
    const $members = createHtmlElement("select", "members", ["registerFormElement"], null);
    const $option4 = createHtmlElement("option", null, null, "1");
    $members.appendChild($option4);
    const $option5 = createHtmlElement("option", null, null, "2");
    $members.appendChild($option5);
    const $option6 = createHtmlElement("option", null, null, "3");
    $members.appendChild($option6);
    const $option7 = createHtmlElement("option", null, null, "4");
    $members.appendChild($option7);
    $form.appendChild($members);

    $form.appendChild($submit);
    $content.appendChild($form);

}
export { render as createRegister };