import DomHandler from "../DomHanlder.js";
import STORE from "../store.js";
import CardView from "./cardView.js";

function Form() {
  const Template = `<form>
    <div class="input">
      <label for="title"><input class="title-notes" id="title" type="text"
          placeholder="The title for my note"></label>
      <div class="input__container">
        <label for="content"> <textarea type="text" placeholder="Write a note" class="input__content" id="content"
            name="new-note"></textarea></label>
      </div>
      <input id=color type=text hidden>
      <div class="input__footer">
        <div class="icons">
          <svg class="svg" style="margin: 0;">
            <use xlink:href="#palette" />
          </svg>
        </div>
        <!-- <a class="create-note" href="">Keep it!</a> -->
        <button class="btn_add">Keep it!</button>
      </div>
      <div class="colors">
          <div class="color border-gray color1"></div>
          <div class="color color2"></div>
          <div class="color color3"></div>
          <div class="color color4"></div>
          <div class="color color5"></div>
          <div class="color color6"></div>
          <div class="color color7"></div>
          <div class="color color8"></div>
          <div class="color color9"></div>
          <div class="color color10"></div>
        </div>
    </div>
  </form>`;

  const getColor = (palete, input) => {
    return palete.addEventListener("click", (event) => {
      let class_element = event.target.className.split(" ");
      let color = class_element[1];
      if (class_element[1] === "colors-opened") color = "color1";
      if (class_element.length > 2) color = class_element[2];

      // change color of text
      const inputTitle = document.querySelector("#title");
      const textarea = document.querySelector("#content");
      input.className = `input ${color}`;
      textarea.className = `input__content ${color}`;
      inputTitle.className = `title-notes ${color}`;

      document.querySelector("#color").value = color;
    });
  };

  function displayPalette() {
    // inputContainer
    const svg = document.querySelector(".svg");
    const input = document.querySelector(".input");

    svg.addEventListener("mouseover", () => {});
    const colorsPalette = document.querySelector(".colors");

    svg.addEventListener("mouseover", () => {
      colorsPalette.classList.add("colors-opened");
      getColor(colorsPalette, input);
    });
    colorsPalette.addEventListener("mouseleave", () => {
      colorsPalette.classList.remove("colors-opened");
    });
  }

  function colorListener() {
    displayPalette();
  }

  function submitListener() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();

      const data = event.target.elements;

      STORE.addNote({
        title: data.title.value,
        content: data.content.value,
        color: data.color.value,
        pinned: false,
      });
      // get Container of notes to update states
      let Cards = DomHandler(".main__notes");
      Cards.load(CardView());
      event.target.reset();
    }
  }

  return {
    toString() {
      return Template;
    },
    addListeners() {
      colorListener();
      submitListener();
    },
  };
}

export default Form;
