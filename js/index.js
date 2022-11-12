const notas = ["Nota 1", "Nota 2", "Nota 3"];
const papelerasNotas = ["Nota5", "Nota 6", "Nota 9"];
function deleteNota(index) {
  notas.splice(index, 1);
}

function renderNotas() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  notas.forEach(function (nota, index) {
    /*<div class="nota">
            <p>Nota 2</p>
             <button>Eliminar</button>
         </div>*/

    const div = document.createElement("div");
    div.className = "nota";

    const p = document.createElement("p");
    p.textContent = nota;

    const button = document.createElement("button");
    button.textContent = "Eliminar";
    button.addEventListener("click", function (event) {
      deleteNota(index);
      renderNotas();
    });

    div.append(p, button);

    container.append(div);
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nota = event.target.elements["new-note"].value;
  notas.push(nota);
  event.target.reset();
  renderNotas();
});

const moveToPapelera = (indice) => {
  const element = notas[indice];

  papelerasNotas.push(element);
  notas.splice(indice, 1);
};

const moveToMain = (indice) => {
  const element = papelerasNotas[indice];

  notas.push(element);
  papelerasNotas.splice(indice, 1);
};

renderNotas();
const getColor = () => {
  const palete = document.querySelector(".colors");

  palete.addEventListener("click", (event) => {
    const color = event.target.className.split(" ");
    // const color = window.getComputedStyle(event.target).backgroundColor;
    console.log(color);
  });
};
getColor();
