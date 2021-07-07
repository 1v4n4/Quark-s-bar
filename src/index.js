const mother= document.getElementById("content");
mother.className = 'bg-secondary';

// Header
const header = document.createElement('header');
header.classList.add('d-flex', 'bg-dark', 'justify-content-center', 'p-2');

mother.appendChild(header);

//Home tab

const tab1 = document.createElement('button');
tab1.className = 'btn btn-dark m-4 text-warning fw-bold active fs-2 ';
const tab1text = document.createTextNode("Home");
tab1.appendChild(tab1text)
header.appendChild(tab1)



const tab2 = document.createElement('button');
tab2.className = 'btn btn-dark m-4 text-warning fw-bold active fs-2 ';
const tab2text = document.createTextNode("Menu");
tab2.appendChild(tab2text);
header.appendChild(tab2);


const tab3 = document.createElement('button');
tab3.className = 'btn btn-dark m-4 text-warning fw-bold active fs-2 ';
const tab3text = document.createTextNode("Contact");
tab3.appendChild(tab3text);
header.appendChild(tab3);


// Footer
const footer = document.createElement('footer');
footer.className = 'bg-dark pb-1';

mother.appendChild(footer)

const footerP = document.createElement('p');
footerP.className = "fw-bold fs-5 text-warning text-center mt-4";
const footerText = document.createTextNode("Made by 1v4n4 © 2021");
footerP.appendChild(footerText)
footer.appendChild(footerP)