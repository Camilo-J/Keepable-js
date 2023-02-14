function DomHandler(parentSelector) {
  let parent = document.querySelector(parentSelector);

  if (!parent) throw new Error("Parent not found");

  return {
    load(module) {
      parent.innerHTML = module;

      console.log(module);
      module.addListeners();
    },
  };
}

export default DomHandler;
