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
  notes: JSON.parse(localStorage.getItem("notas")) || initNotas,
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
};

export default STORE;
