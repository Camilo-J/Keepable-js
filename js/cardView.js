import DomHandler from "../DomHanlder.js";
import STORE from "../store.js";

const CardView = () => {
  let notas = STORE.notes;
  function renderNotas(option) {
    if (option === "notpinned")
      return notas
        .filter((note) => note.pinned === false)
        .map((nota) => crearNota(nota));

    if (option === "pinned")
      return notas
        .filter((note) => note.pinned === true)
        .map((nota) => crearNota(nota));
  }

  function crearNota(nota) {
    return `
    <li id="nota-${nota.id}">
      <div class="nota ${nota.color}">
        <div class="nota__text">
          <p>${nota.title}</p>
          <p>${nota.content}</p>
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
        <div class="notas__icons"><svg class="svg">
            <use xlink:href="#palette"></use>
          </svg>
          <svg class="svg pinnedIcon">
            <use xlink:href="#pinned"></use>
          </svg>
          <svg class="svg scale08">
            <use xlink:href="#trash"></use>
          </svg></div>
      </div>
    </li>
`;
  }

  const template = `
      <div>
        <div>
        ${
          renderNotas("pinned").length > 0
            ? `<p class="text-white semibold">Pinned</p>
              <ul class="container"> 
                ${renderNotas("pinned").join("")}
              </ul>`
            : ""
        }
        ${
          renderNotas("notpinned").length > 0
            ? `<p class="text-white semibold">Others</p>
              <ul class="container">
                ${renderNotas("notpinned").join("")}
              </ul>`
            : ""
        }
        </div>
      </div>
    `;

  const getColor = (palete, nota) => {
    return palete.addEventListener("click", (event) => {
      let class_element = event.target.className.split(" ");
      let color = class_element[1];
      if (class_element[1] === "colors-opened") color = "color1";
      if (class_element.length > 2) color = class_element[2];

      let idNote = nota.closest("li").id.split("-")[1];
      STORE.changeColor(idNote, color);

      palete.parentElement.className = `nota ${color}`;
    });
  };

  function displayPalette(iconPalette, nota) {
    const colorsPalette = iconPalette.closest(".nota").children[1];

    iconPalette.addEventListener("mouseover", () => {
      colorsPalette.classList.add("colors-opened");
      getColor(colorsPalette, nota);
    });
    colorsPalette.addEventListener("mouseleave", () => {
      colorsPalette.classList.remove("colors-opened");
    });
  }

  function moveNoteToTrash(icon, nota) {
    let id = nota.closest("li").id.split("-")[1];
    let Cards = DomHandler(".main__notes");
    icon.addEventListener("click", () => {
      STORE.moveToTrash(id);
      Cards.load(CardView());
    });
  }

  function pinNote(icon, note) {
    let id = note.closest("li").id.split("-")[1];
    let Cards = DomHandler(".main__notes");
    icon.addEventListener("click", () => {
      STORE.changePinnedValue(id);
      Cards.load(CardView());
    });
  }

  function noteListeners() {
    let notes = document.querySelectorAll(".nota");

    notes.forEach((note) => {
      let svgNote = note.lastElementChild.firstElementChild;
      let pinSvg = note.lastElementChild.children[1];
      let trashIcon = note.lastElementChild.lastElementChild;
      pinNote(pinSvg, note);
      displayPalette(svgNote, note);
      moveNoteToTrash(trashIcon, note);
    });
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      noteListeners();
    },
  };
};

export default CardView;
