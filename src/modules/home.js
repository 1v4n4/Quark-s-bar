
const mother = document.getElementById("content");

function makeMain() {

  // Main picture div
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv container-md pt-5';
  const h1 = document.createElement('h1');
  h1.className = 'text-center text-warning mb-4 mt-3';
  const h1Text =document.createTextNode("Quark's Bar");
  h1.appendChild(h1Text);
  homeDiv.appendChild(h1);


  const p1 = document.createElement('p');
  p1.className = 'text-center text-dark fw-bold fst-italic fs-3 p1';
  const span = document.createElement('span');
  const spanText = document.createTextNode("Open 26 hours a day");
  span.appendChild(spanText);
  span.className = 'bg-warning p-2';
  p1.appendChild(span);
  homeDiv.appendChild(p1);

  //* Quote div

  const quoteDiv = document.createElement('div');
  quoteDiv.className = 'd-flex justify-content-center my-5';

  const quote = document.createElement('p');
  quote.className = 'text-center text-warning fw-bold mt-5 me-3 fst-italic quote';
  const quoteText = document.createTextNode('\"A suit of the finest Andorian silk? A ring of pure Surax? A complete set of Tanesh pottery? How about a latinum plated bucket to sleep in?\"');
  quote.appendChild(quoteText);
  mother.appendChild(homeDiv);

  const quarkImg = document.createElement('img');
  quarkImg.src ='./images/quark.jpg';
  quarkImg.className = 'rounded-circle ms-3 quark';

  quoteDiv.appendChild(quote);
  quoteDiv.appendChild(quarkImg);

  const main = document.createElement('article');
  main.appendChild(homeDiv);
  main.appendChild(quoteDiv);


  mother.appendChild(main);
}

export default makeMain;