// const notas = ["Nota 1", "Nota 2", "Nota 3"];
// const papelerasNotas = ["Nota5", "Nota 6", "Nota 9"];
// function deleteNota(index) {
//   notas.splice(index, 1);
// }

// function renderNotas() {
//   const container = document.querySelector(".container");
//   container.innerHTML = "";

//   notas.forEach(function (nota, index) {
//     /*<div class="nota">
//             <p>Nota 2</p>
//              <button>Eliminar</button>
//          </div>*/

//     const div = document.createElement("div");
//     div.className = "nota";

//     const p = document.createElement("p");
//     p.textContent = nota;

//     const button = document.createElement("button");
//     button.textContent = "Eliminar";
//     button.addEventListener("click", function (event) {
//       deleteNota(index);
//       renderNotas();
//     });

//     div.append(p, button);

//     container.append(div);
//   });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const nota = event.target.elements["new-note"].value;
//   notas.push(nota);
//   event.target.reset();
//   renderNotas();
// });

// const moveToPapelera = (indice) => {
//   const element = notas[indice];

//   papelerasNotas.push(element);
//   notas.splice(indice, 1);
// };

// const moveToMain = (indice) => {
//   const element = papelerasNotas[indice];

//   notas.push(element);
//   papelerasNotas.splice(indice, 1);
// };

// renderNotas();

let notas = [
  { title: "Nota 4",
    content:"Ir a nadar",

  },
  { title: "Nota 5",
    content:"Ir al gym",

  },
  
]

let papelera = []

// const input = document.querySelector("input");
// let addBtn = document.querySelector(".btn_add");
// const ul = document.querySelector("ul");

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
    ul.append(notaEl);
  }
}

function crearNota(nota) {
   let li = document.createElement("li")
  const divNota = document.createElement("div");
  let title = document.createElement("p");
  title.textContent = nota.title;
  let content = document.createElement("p");
  content.textContent = nota.content;
   divNota.className = "nota";
  divNota.append(title,content);
  li.append(divNota);
  return li;
}

const form = document.querySelector("form");
form.addEventListener("submit",handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  
  
  const data = event.target.elements;
  
  const newNote = {
    title: data.title.value,
    content: data.content.value,
  };

notas.push(newNote);
renderNotas(notas);
}


const getColor = () => {
  const palete = document.querySelector(".colors");

  return palete.addEventListener("click", (event) => {
    const color = event.target.className.split(" ")[1];
    // const color = window.getComputedStyle(event.target).backgroundColor;
    console.log(color);
    return color;
  });
};

const changeColor = () => {
  const gottenColor = getColor();
};
getColor();


renderNotas(notas)