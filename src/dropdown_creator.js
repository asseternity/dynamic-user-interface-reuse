export default class DropdownCreator {
  CreateDropdown(dropdown_button_id, dropdown_content_class) {
    const button = document.querySelector(`#${dropdown_button_id}`);
    const dropdownContentDiv = document.querySelector(
      `.${dropdown_content_class}`,
    );
    dropdownContentDiv.style.visibility = "hidden";
    button.addEventListener("click", () =>
      this.ShowDropdown(dropdown_button_id, dropdown_content_class),
    );
  }
  ShowDropdown(dropdown_button_id, dropdown_content_class) {
    const button = document.querySelector(`#${dropdown_button_id}`);
    const dropdownContentDiv = document.querySelector(
      `.${dropdown_content_class}`,
    );
    dropdownContentDiv.style.visibility = "visible";
    document.addEventListener("click", (event) =>
      this.HideDropdown(event, dropdown_button_id, dropdown_content_class),
    );
  }
  HideDropdown(event, dropdown_button_id, dropdown_content_class) {
    const button = document.querySelector(`#${dropdown_button_id}`);
    const dropdownContentDiv = document.querySelector(
      `.${dropdown_content_class}`,
    );
    if (event.target !== button) {
      dropdownContentDiv.style.visibility = "hidden";
    }
  }
}
