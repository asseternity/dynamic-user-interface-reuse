import "./styles.css";
import DropdownCreator from "./dropdown_creator/dropdown_creator";
import ImageCarousel from "./image_carousel";

let dropdownCreator = new DropdownCreator();
let imageCarousel = new ImageCarousel();

dropdownCreator.CreateDropdown("dropdown_button_1", "dropdown_content");
dropdownCreator.StyleDropdown("dropdown_content", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

dropdownCreator.CreateDropdown("dropdown_button_2", "dropdown_content_2");
dropdownCreator.StyleDropdown("dropdown_content_2", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

dropdownCreator.CreateDropdown("dropdown_button_3", "dropdown_content_3");
dropdownCreator.StyleDropdown("dropdown_content_3", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

dropdownCreator.CreateDropdown("dropdown_button_4", "dropdown_content_4");
dropdownCreator.StyleDropdown("dropdown_content_4", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

dropdownCreator.CreateDropdown("dropdown_button_5", "dropdown_content_5");

imageCarousel.CreateCarousel();

// Done:
// 1) Make the dropdown menu pretty (but basic) by setting the style in JS
// 2) Animate using CSS (also in JS)

// To Do:
// 3) Mobile
// 4) Image slider
