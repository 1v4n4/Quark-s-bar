const mother = document.getElementById('content');
mother.className = 'bg-dark';

const makeCard = (src, title, text) => {
  const card = document.createElement('div');
  card.className = 'card card-width  bg-warning m-5';
  const cardImg = document.createElement('img');
  cardImg.src = src;
  cardImg.className = 'card-img-top';

  card.appendChild(cardImg);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'fw-bold text-center text-dark text-warning';
  const cardTitleText = document.createTextNode(title);
  cardTitle.appendChild(cardTitleText);

  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.className = 'card-text text-center fw-bold text-dark';
  const cardTextText = document.createTextNode(text);
  cardText.appendChild(cardTextText);

  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
};

const makeMenu = () => {
  const cardContainer = document.createElement('article');
  cardContainer.className = 'container-md d-flex flex-wrap justify-content-center';
  cardContainer.appendChild(makeCard('./images/pudding.jpg', 'I\'danian spice pudding', 'A rich and delicious dessert, white with a creme top, a favorite at the Replimat on Deep Space 9\'s Promenade.'));
  cardContainer.appendChild(makeCard('./images/tube-grubs.png', 'Tube grubs', 'Ferengi\'s delicacy is usually eaten alive, though they could also be minced or fried. Fresh tube grubs are preferred cold.'));
  cardContainer.appendChild(makeCard('./images/steak.png', 'Steak', 'An ancient Human delicacy is a very simple dish - grilled meat (on Earth, usually beef), usually with vegetables aside.'));
  cardContainer.appendChild(makeCard('./images/hasperat.png', 'Bajoran hasperat', 'Well-known spicy food resembling a burrito. Specially prepared brine,  if made correctly would cause the eyes to water and sear the tongue. '));
  cardContainer.appendChild(makeCard('./images/tongue.png', 'Haligian tongue sauce', 'Quark created a chocolate soufflé with Haligian tongue sauce after Cardassia signed a peace treaty with Bajor. He named it in honor of the Bajoran religious leader, Kai Winn.'));
  cardContainer.appendChild(makeCard('./images/sand.png', 'Gramilian sand pea', 'An edible seed that is served as a snack. Goes well with drinks and it can be eaten with a Cardassian delicacy yamok sauce.'));
  mother.appendChild(cardContainer);
}

export default makeMenu;