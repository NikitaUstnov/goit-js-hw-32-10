import './js/menu-theme-swicher.js';
import dishMenuTemplate from './handlebars/dish-menu-markup.hbs';
import dishList from './menu.json';

const menuItemsRef = document.querySelector('.js-menu');
menuItemsRef.innerHTML = dishMenuTemplate(dishList);
