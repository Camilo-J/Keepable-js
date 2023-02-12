import STORE from "../store.js";

const CardView = () => {
  let notas = STORE.notes;
  function renderNotas() {
    return notas.map((nota) => crearNota(nota));
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
          </svg><svg class="svg scale08">
            <use xlink:href="#trash"></use>
          </svg></div>
      </div>
    </li>
`;
  }

  const template = `
      <div>
        <div class="container-notas">
          <ul class="container">
          ${renderNotas().join("")}
          </ul>
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

  function listenerPalette() {
    let notes = document.querySelectorAll(".nota");

    notes.forEach((note) => {
      let svgNote = note.lastElementChild.firstElementChild;
      displayPalette(svgNote, note);
    });
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenerPalette();
    },
  };
};

export default CardView;
