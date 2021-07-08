const mother = document.getElementById('content');

const makeAboutCard = (title, text) => {
  const aboutCardBody = document.createElement('div');
  aboutCardBody.className = 'col-12';

  const aboutCardTitle = document.createElement('h2');
  aboutCardTitle.className = 'fw-bold  my-4 text-end text-warning text-warning';
  const aboutCardTitleText = document.createTextNode(title);
  aboutCardTitle.appendChild(aboutCardTitleText);

  aboutCardBody.appendChild(aboutCardTitle);

  const aboutCardText = document.createElement('p');
  aboutCardText.className = 'card-text fw-bold text-end text-warning';
  const aboutCardTextText = document.createTextNode(text);
  aboutCardText.appendChild(aboutCardTextText);

  aboutCardBody.appendChild(aboutCardText);
  return aboutCardBody;
}

const makeAbout = () => {
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'container-md d-flex gap-5 my-5';

  const aboutImg = document.createElement('img');
  aboutImg.src = './images/mural.png';

  aboutContainer.appendChild(aboutImg);
  mother.appendChild(aboutContainer);

  const aboutCardContainer = document.createElement('div');
  aboutCardContainer.className = 'd-flex flex-wrap';

  aboutContainer.appendChild(aboutCardContainer);

  aboutCardContainer.appendChild(makeAboutCard('Reputation', 'Quark\'s Bar, Grill, Embassy, Gaming House, and Holosuite Arcade is an establishment owned by the Ferengi Quark on the Promenade of Deep Space 9 with the cooperation of the government of the Ferengi Alliance. Quark\'s bar is open 26 hours a day and it is one of the major social locations on DS9 with food and drink, including a buffet, gambling, and holosuites.'));
  aboutCardContainer.appendChild(makeAboutCard('Food and drink', 'A range of foods and beverages is served at Quark\'s. Most of the food was replicated, while the drinks were either replicated or came fresh from bottles kept behind the bar. Quark also kept a private stock of drinks, which included Maraltian Seev-ale and Aldebaran whiskey. The quality of this food is well known and Quark is often hired to cater events and meetings on the space station, particularly in the wardroom, where he provided food and drinks together with waiter service.'));
  aboutCardContainer.appendChild(makeAboutCard('Gaming', 'A casino accepts both gold-pressed latinum and gambling tokens as gaming tender. Many gaming tables are located on Level 1, and the most prominent is dabo.  Games of tongo are also played, the dartboard is installed upon request of Humans, and among other games are chula, dom-jot, prayko alleys...'));
  aboutCardContainer.appendChild(makeAboutCard('Holosuites', 'The upper levels of Quark\'s are reserved for holosuites often used for adult entertainment, but also a more benign recreation. Credit for use of the holosuites could be purchased at the bar, as could many enticing holographic programs. The holosuites are often used by visitors for programs of an adult nature, while residents of the station and members of its crew use them for more benign recreations like kayaking or recreating old Earth battles.'));

  mother.appendChild(aboutContainer);
}

export default makeAbout;