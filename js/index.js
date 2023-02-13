import CardView from "./cardView.js";
import DomHandler from "../DomHanlder.js";
import Main from "./main.js";

let main = DomHandler(".main");
main.load(Main());

let Cards = DomHandler(".main__notes");
Cards.load(CardView());
