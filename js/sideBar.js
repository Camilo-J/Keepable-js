import DomHandler from "../DomHanlder.js";
import STORE from "../store.js";
import Main from "./main.js";

function SideBar() {
  const template = `
    <section class="lateral py-1 ">
    <a class="lateral__links" href="index.html" id="homePage">
      <svg>
        <use xlink:href="#keys" />
      </svg>
      <p>Notes</p>
    </a>
    <a href="#" class="lateral__links" id="trashPage">
      <svg>
        <use xlink:href="#trashSidebar" />
      </svg>
      <p>Trash</p>
    </a>
  </section>
    `;
  function goListener() {
    const links = document.querySelectorAll(".lateral__links");
    let main = DomHandler("#root");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // STORE
        console.log("funcionando");
        console.log(link.id);
        STORE.changeCurrentPage(link.id);

        main.load(Main());
      });
    });
  }
  return {
    toString() {
      return template;
    },
    addListeners() {
      goListener();
    },
  };
}

export default SideBar;
