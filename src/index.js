const mother= document.getElementById("content");
mother.className = 'bg-dark';

// Header

function createTab(name) {
  const tab = document.createElement('button');
  tab.className = 'btn btn-dark m-3 text-warning fw-bold active fs-2';
  const tabText = document.createTextNode(name);
  tab.appendChild(tabText);
  return tab;
}

const header = document.createElement('header');
header.classList.add('d-flex', 'bg-dark', 'justify-content-center', 'p-2');
header.appendChild(createTab("Home"))
header.appendChild(createTab("Menu"))
header.appendChild(createTab("About"))
mother.appendChild(header);


//main
const homeDiv = document.createElement('div')
homeDiv.className = 'homeDiv container-md pt-5'
const h1 = document.createElement('h1')
h1.className = 'text-center text-warning mb-4 mt-3'
const h1Text =document.createTextNode("Quark's Bar")
h1.appendChild(h1Text)
homeDiv.appendChild(h1)


const p1 = document.createElement('p')
p1.className = 'text-center text-dark fw-bold fst-italic fs-3 p1';
const span = document.createElement('span')
const spanText = document.createTextNode("Open 26 hours a day")
span.appendChild(spanText);
span.className = 'bg-warning p-2';
p1.appendChild(span)
homeDiv.appendChild(p1)

const quoteDiv = document.createElement('div')
quoteDiv.className = 'd-flex justify-content-center my-5'

const quote = document.createElement('p')
quote.className = 'text-center text-warning fw-bold mt-5 me-3 fst-italic quote';
const quoteText = document.createTextNode('\"A suit of the finest Andorian silk? A ring of pure Surax? A complete set of Tanesh pottery? How about a latinum plated bucket to sleep in?\"')
quote.appendChild(quoteText)
mother.appendChild(homeDiv)

const quarkImg = document.createElement('img')
quarkImg.src ='./images/quark.jpg'
quarkImg.className = 'rounded-circle ms-3 quark'

quoteDiv.appendChild(quote)
quoteDiv.appendChild(quarkImg)

const main = document.createElement('article')
main.appendChild(homeDiv)
main.appendChild(quoteDiv)

mother.appendChild(main)

// Footer

function makeLink() {
  const link = document.createElement("a");
  link.href = "https://github.com/1v4n4";
  link.className =' text-warning';
  const linkText = document.createTextNode("1v4n4");
  link.appendChild(linkText)
  return link;
}

const footer = document.createElement('footer');
footer.className = 'bg-dark';
const footerP = document.createElement('p');
footerP.className = "fw-bold fs-5 text-warning text-center pt-4";
const footerText = document.createTextNode('Made by ');
footerP.appendChild(footerText);

footerP.appendChild(makeLink())

const footerText2 = document.createTextNode('  © 2021');
footerP.appendChild(footerText2)

footer.appendChild(footerP)
 mother.appendChild(footer)