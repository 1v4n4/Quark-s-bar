const mother = document.getElementById("content");

function MakeTab(name) {
  const tab = document.createElement('button');
  tab.className = 'btn btn-dark m-3 text-warning fw-bold active fs-2';
  const tabText = document.createTextNode(name);
  tab.appendChild(tabText);
  return tab;
}

const makeHeader = () => {
  const header = document.createElement('header');
  header.classList.add('d-flex', 'bg-dark', 'justify-content-center', 'p-2');
  header.appendChild(MakeTab("Home"));
  header.appendChild(MakeTab("Menu"));
  header.appendChild(MakeTab("About"));
  mother.appendChild(header);
}

function makeLink() {
  const link = document.createElement("a");
  link.href = "https://github.com/1v4n4";
  link.className =' text-warning';
  const linkText = document.createTextNode("1v4n4");
  link.appendChild(linkText)
  return link;
}

const makeFooter = () => {
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
}

export { makeHeader, makeFooter }