import STORE from "../store.js";

function SideBar() {
  const template = `
    <section class="lateral py-1 ">
    <a class="lateral__links" href="index.html" id="homePage">
      <svg>
        <use xlink:href="#keys" />
      </svg>
      Notes
    </a>
    <a href="#" class="lateral__links" id="trashPage">
      <svg>
        <use xlink:href="#trashSidebar" />
      </svg>
      Trash
    </a>
  </section>
    `;
  function goListener() {
    const links = document.querySelectorAll(".lateral__links");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // STORE
        console.log("funcionando");
        console.log(link.id);
        STORE.changeCurrentPage(link.id);
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
