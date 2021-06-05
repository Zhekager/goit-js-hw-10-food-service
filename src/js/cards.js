import cardsTemplate from '../templates/cards.hbs';
import menu from '../menu.json';

// Шаблон для 1 элемента меню
const cardsMarkup = createCardsMarkup(menu);

function createCardsMarkup(menu) {
  return menu.map(cardsTemplate).join('');
}

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', cardsMarkup);

// Шаблон для массива данных
// const cardsMarkup = cardsTemplate(menu);
// menuRef.innerHTML = cardsMarkup;