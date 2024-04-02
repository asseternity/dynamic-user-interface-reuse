import "./styles.css";
import DropdownCreator from "./dropdown_creator/dropdown_creator";

let dropdownCreator = new DropdownCreator();

dropdownCreator.CreateDropdown("dropdown_button_1", "dropdown_content");
dropdownCreator.StyleDropdown("dropdown_content", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

dropdownCreator.CreateDropdown("dropdown_button_2", "dropdown_content_2");
dropdownCreator.StyleDropdown("dropdown_content_2", "15px", "1px solid transparent", "100px", "black", "0px 8px 16px 0px grey");

// Done:
// 1) Make the dropdown menu pretty (but basic) by setting the style in JS

// To Do:
// 2) Animate using CSS (also in JS)
