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
  trashNotes: JSON.parse(localStorage.getItem("trashNotas")) || [
    {
      id: nextId.newId(),
      title: "Nota trash",
      content: "Ir a nadar",
      color: "color2",
      pinned: false,
    },
  ],
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
    this.currentPage = value;
    localStorage.setItem("currentPage", JSON.stringify(value));
  },
  moveToTrash(id) {
    let note = this.notes.find((note) => note.id === Number.parseInt(id));
    console.log(note);
    this.notes = this.notes.filter((note) => note.id !== Number.parseInt(id));
    this.trashNotes.push(note);
    localStorage.setItem("trashNotas", JSON.stringify(this.trashNotes));
    localStorage.setItem("notas", JSON.stringify(this.notes));
  },
  recoverNotes(id) {
    let note = this.trashNotes.find((note) => note.id === Number.parseInt(id));
    this.trashNotes = this.trashNotes.filter(
      (note) => note.id !== Number.parseInt(id)
    );
    this.notes.push(note);
    localStorage.setItem("notas", JSON.stringify(this.notes));
    localStorage.setItem("trashNotas", JSON.stringify(this.trashNotes));
  },
  deleteNotes(id) {
    this.trashNotes = this.trashNotes.filter(
      (note) => note.id !== Number.parseInt(id)
    );
    localStorage.setItem("trashNotas", JSON.stringify(this.trashNotes));
  },
};

export default STORE;
