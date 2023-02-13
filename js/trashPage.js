import STORE from "../store.js";

function TrashPage() {
  let notas = STORE.trashNotes;
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
            <div class="notas__icons">
              <svg class="svg scale08">
                <use xlink:href="#trash"></use>
              </svg>
            <svg class="svg">
              <use xlink:href="#recover"></use>
            </svg>
            </div>
          </div>
        </li>
    `;
  }

  function renderTrashNotes() {
    return notas.map((nota) => crearNota(nota));
  }

  const template = `
  <div class="main__notes">
  <div>
  <div class="container-notas">
    <ul class="container">
    ${renderTrashNotes().join("")}
    </ul>
  </div>
  </div>
  </div>`;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
}

export default TrashPage;
