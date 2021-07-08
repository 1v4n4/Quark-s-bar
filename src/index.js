import makeMain from './modules/home';
import makeMenu from './modules/menu';
import makeAbout from './modules/about';

const mother = document.getElementById('content');
mother.className = 'bg-dark';

const makeLink = () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/1v4n4';
  link.className = 'text-warning';
  const linkText = document.createTextNode('1v4n4');
  link.appendChild(linkText);
  return link;
};

const makeFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'bg-dark';
  const footerP = document.createElement('p');
  footerP.className = 'fw-bold fs-5 text-warning text-center pt-4';
  const footerText = document.createTextNode('Made by ');
  footerP.appendChild(footerText);

  footerP.appendChild(makeLink());

  const footerText2 = document.createTextNode('  © 2021');
  footerP.appendChild(footerText2);

  footer.appendChild(footerP);
  mother.appendChild(footer);
};

const MakeTab = (name, id) => {
  const tab = document.createElement('button');
  tab.setAttribute('id', id);
  tab.className = 'btn btn-dark mx-3 my-4 text-warning fw-bold active fs-2';
  const tabText = document.createTextNode(name);
  tab.appendChild(tabText);
  return tab;
};

const MakeHeader = () => {
  const header = document.createElement('header');
  header.classList.add('d-flex', 'pt-5', 'bg-dark', 'justify-content-center', 'p-2');
  header.appendChild(MakeTab('Home', 'home'));
  header.appendChild(MakeTab('Menu', 'menu'));
  header.appendChild(MakeTab('About', 'about'));
  mother.appendChild(header);
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const aboutBtn = document.getElementById('about');

  homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mother.innerHTML = '';
    MakeHeader();
    makeMain();
    makeFooter();
  });

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mother.innerHTML = '';
    MakeHeader();
    makeMenu();
    makeFooter();
  });

  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mother.innerHTML = '';
    MakeHeader();
    makeAbout();
    makeFooter();
  });
};

const homeToDom = () => {
  MakeHeader();
  makeMain();
  makeFooter();
};

document.addEventListener('DOMContentLoaded', homeToDom());
