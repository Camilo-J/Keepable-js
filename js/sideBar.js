function SideBar() {
  const template = `
    <section class="lateral py-1 ">
    <a class="lateral__links" href="index.html">
      <svg>
        <use xlink:href="#keys" />
      </svg>
      Notes
    </a>
    <a href="#" class="lateral__links">
      <svg>
        <use xlink:href="#trashSidebar" />
      </svg>
      Trash
    </a>
  </section>
    `;

  return {
    toString() {
      return template;
    },
    addListeners() {},
  };
}

export default SideBar;
