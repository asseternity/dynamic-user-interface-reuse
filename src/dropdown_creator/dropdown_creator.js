export default class DropdownCreator {
  activeDropdown = { dropdown_button_id: null, dropdown_content_class: null };
  dropdownsCreated = 0;

  CreateDropdown(dropdown_button_id, dropdown_content_class) {
    // find nodes
    const button = document.querySelector(`#${dropdown_button_id}`);
    const dropdownContentDiv = document.querySelector(`.${dropdown_content_class}`);
    dropdownContentDiv.style.position = "absolute";
    this.dropdownsCreated++;

    // declare show function (to remove the event listener later)
    const showFunction = (event) => {
      event.stopPropagation();
      this.ShowDropdown(dropdown_button_id, dropdown_content_class);
    };

    // declare hide function (to remove the event listener later)
    const hideFunction = (event) => {
      event.stopPropagation();
      this.HideDropdown(null, null);
    };

    // event listener to show
    button.addEventListener("click", showFunction);

    // add a general hideFunction event listener
    if (this.dropdownsCreated == 1) {
      document.addEventListener("click", hideFunction);
    }
  }

  ShowDropdown(dropdown_button_id, dropdown_content_class) {
    console.log(`show called`);

    // if there is no active dropdown
    if (this.activeDropdown.dropdown_button_id == null) {
      console.log(`no active dropdowns`);
      // show the dropdown menu
      this.AnimateDropdown(dropdown_content_class);
      // update that this is the active dropdown
      this.activeDropdown = { dropdown_button_id, dropdown_content_class };
    } else {
      console.log(`there is an active dropdown:`);
      console.log(this.activeDropdown);
      // if there is an active dropdown
      // call the HideDropdown method on the active dropdown
      this.HideDropdown(dropdown_button_id, dropdown_content_class);
    }
  }

  HideDropdown(dropdown_button_id, dropdown_content_class) {
    console.log(`hider called with ${dropdown_button_id} and ${dropdown_content_class}`);
    console.log(`the currently active dropdown is:`);
    console.log(this.activeDropdown);

    let activeD = this.activeDropdown.dropdown_button_id;

    if (this.activeDropdown.dropdown_button_id !== null) {
      console.log("hider says: there is an active dropdown! lemme close it!");
      this.AnimateDropdown(this.activeDropdown.dropdown_content_class);
      this.activeDropdown = { dropdown_button_id: null, dropdown_content_class: null };
      if (dropdown_button_id !== null && dropdown_content_class !== null) {
        console.log(`hider says: button and content that were given to me are not null!`);
        if (dropdown_button_id !== activeD) {
          console.log(`dropdown given to me and the active dropdown are not the same! I'm calling shower!`);
          this.ShowDropdown(dropdown_button_id, dropdown_content_class);
        }
      }
    }
  }

  StyleDropdown(dropdown_content_class, padding, border, maxWidth, textColor, boxShadow) {
    const dropdownContentDiv = document.querySelector(`.${dropdown_content_class}`);

    for (let i = 0; i < dropdownContentDiv.children.length; i++) {
      dropdownContentDiv.children[i].style.padding = `${padding}`;
      dropdownContentDiv.children[i].style.border = `${border}`;
      dropdownContentDiv.children[i].style.color = `${textColor}`;
      dropdownContentDiv.children[i].style.textDecoration = "none";
    }

    dropdownContentDiv.style.display = "flex";
    dropdownContentDiv.style.flexDirection = "column";
    dropdownContentDiv.style.maxWidth = `${maxWidth}`;
    dropdownContentDiv.style.boxShadow = `${boxShadow}`;
  }

  AnimateDropdown(dropdown_content_class) {
    const dropdownContentDiv = document.querySelector(`.${dropdown_content_class}`);
    dropdownContentDiv.style.maxHeight = dropdownContentDiv.style.maxHeight ? null : dropdownContentDiv.scrollHeight + "px";
  }
}

/* 
Add below to CSS:
.dropdown_content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
*/
