import CardView from "./cardView.js";
import DomHandler from "./DomHanlder.js";
import Main from "./main.js";
import STORE from "./store.js";

let main = DomHandler("#root");
main.load(Main());

if (STORE.currentPage === "homePage") {
  let Cards = DomHandler(".main__notes");
  Cards.load(CardView());
}
