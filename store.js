const nextId = (function createId() {
  let id = 0;
  return {
    newId() {
      id++;
      return id;
    },
  };
})();

let initNotas = [
  {
    id: nextId.newId(),
    title: "Nota 4",
    content: "Ir a nadar",
    color: "color2",
    pinned: false,
  },
  {
    id: nextId.newId(),
    title: "Nota 5",
    content: "Ir al gym",
    color: "color4",
    pinned: false,
  },
];

const STORE = {
  currentPage: JSON.parse(localStorage.getItem("currentPage")) || "homePage",
  notes: JSON.parse(localStorage.getItem("notas")) || initNotas,
  trashNotes: JSON.parse(localStorage.getItem("trashNotas")) || [],
  changeColor(noteId, color) {
    let nota = this.notes.find((nota) => nota.id === Number.parseInt(noteId));
    nota.color = color;
    localStorage.setItem("notas", JSON.stringify(this.notes));
  },
  addNote(note) {
    let newNote = { ...note, id: nextId.newId() };
    this.notes.push(newNote);
    localStorage.setItem("notas", JSON.stringify(this.notes));
  },
  changeCurrentPage(value) {
    this.changeCurrentPage = value;
    localStorage.setItem("currentPage", JSON.stringify(value));
  },
};

export default STORE;
