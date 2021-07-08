import makeMain from './modules/home';
import { makeHeader, makeFooter } from './modules/restaurant';
import makeMenu from './modules/menu';
import makeAbout from './modules/about';


const button = document.getElementsByTagName('button');

const mother= document.getElementById("content");
mother.className = 'bg-dark';

function homeToDom() {
  makeHeader();
  makeMain();
  makeFooter();
}

function menuToDom() {
  makeHeader();
  makeMenu();
  makeFooter();
}

function aboutToDom() {
  makeHeader();
  makeAbout();
  makeFooter();
}

document.addEventListener('DOMContentLoaded', homeToDom());

console.log("her");

button[0].addEventListener('click', (e) => {
  e.preventDefault();

 console.log("here");

//   const home = button[0].value;
//   const menu = button[1].value;
//   const about = button[2].value;

// console.log("here")
//   switch(button) {
//    case button[0]:
//     homeToDom();
//    case button[1]:
//     menuToDom();
//     case button[2]:
//       aboutToDom();
//   }
 })
