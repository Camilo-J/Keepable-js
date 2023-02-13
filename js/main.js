import Form from "./form.js";

function Main() {
  const template = `
      <!-- <h1>Bienvenido a Notas</h1> -->
      ${Form()}
      <div class="main__notes">

      </div>
      `;
  return {
    toString() {
      return template;
    },
    addListeners() {
      Form().addListeners();
    },
  };
}

export default Main;
