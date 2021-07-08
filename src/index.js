import makeMain from "./modules/home";
import { makeHeader, makeFooter } from "./modules/restaurant";
import fillCardContainer from "./modules/menu";

const mother= document.getElementById("content");
mother.className = 'bg-dark';


makeHeader();
// makeMain()

fillCardContainer()

makeFooter();


