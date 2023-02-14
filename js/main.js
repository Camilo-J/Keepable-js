import STORE from "./store.js";
import Form from "./form.js";
import SideBar from "./sideBar.js";
import TrashPage from "./trashPage.js";

function Main() {
  const template = `
    ${SideBar()}
    <section class="main py-1">
      <!-- <h1>Bienvenido a Notas</h1> -->
      ${
        STORE.currentPage === "homePage"
          ? `${Form()}
      <div class="main__notes">
      </div>`
          : TrashPage()
      }
      </section>
      `;
  return {
    toString() {
      return template;
    },
    addListeners() {
      if (STORE.currentPage === "homePage") Form().addListeners();
      if (STORE.currentPage === "trashPage") TrashPage().addListeners();
      SideBar().addListeners();
    },
  };
}

export default Main;
