let notas = [
  { title: "Nota 4", content: "Ir a nadar" },
  { title: "Nota 5", content: "Ir al gym" },
];

let papelera = [];

// const input = document.querySelector("input");
// let addBtn = document.querySelector(".btn_add");
// const ul = document.querySelector("ul");

const getColor = (palete) => {
  return palete.addEventListener("click", (event) => {
    let class_element = event.target.className.split(" ");
    let color = class_element[1];
    if (class_element[1] === "colors-opened") color = "color1";
    if (class_element.length > 2) color = class_element[2];
    // const color = window.getComputedStyle(palete).backgroundColor;
    console.log(color);
    //  .style.background = color;
    palete.parentElement.className = `nota ${color}`;
  });
};

function displayPalette(iconPalette) {
  return iconPalette.addEventListener("click", (event) => {
    const colorsPalette = iconPalette.parentElement.children[2];
    console.log(iconPalette.parentElement.children[2]);
    // console.log(eve);
    colorsPalette.classList.toggle("colors-opened");
    getColor(colorsPalette);

    // changeColor();
  });
}

// addBtn.addEventListener("click",(e)=> {
//     e.preventDefault();
//     let text = input.value;

//     let li = document.createElement("li");
//     const title = document.createElement("p");
//     const content = document.createElement("p");
//     // creo div y pusheo 1 por 1
//     title.textContent = text;
//     li.appendChild(content);
//     ul.appendChild(li);

// });

function renderNotas(notas) {
  const ul = document.querySelector("ul");
  // ul.innerHTML = "";
  for (const nota of notas) {
    let notaEl = crearNota(nota);
    console.log(notaEl);
    ul.append(notaEl);
  }
}

function crearNota(nota) {
  let li = document.createElement("li");
  const divColor = document.createElement("div");
  divColor.className = "colors";
  // <div class="colors colors-opened">
  const template = `
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
  `;
  divColor.innerHTML = template;
  // console.log(divColor);
  const divNota = document.createElement("div");
  let title = document.createElement("p");
  title.textContent = nota.title;
  let content = document.createElement("p");
  content.textContent = nota.content;

  // Start SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  // use.setAttribute("xlink:href", "#palette");
  use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#palette");
  svg.classList.add("svg");
  svg.append(use);
  // END SVG
  divNota.className = "nota";
  divNota.append(title, content, divColor, svg);
  li.append(divNota);
  // console.log(li);
  displayPalette(svg);
  return li;
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const data = event.target.elements;

  const newNote = {
    title: data.title.value,
    content: data.content.value,
  };

  notas.push(newNote);
  renderNotas(notas);
}

// const getColor = () => {
//   const palete = document.querySelector(".colors");

//   return palete.addEventListener("click", (event) => {
//     const color = event.target.className.split(" ")[1];
//     // const color = window.getComputedStyle(event.target).backgroundColor;
//     console.log(color);
//     return color;
//   });
// };

// getColor();

renderNotas(notas);
