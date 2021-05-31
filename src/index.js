import './js/menu-theme-swicher.js';
import dishMenuTemplate from './handlebars/dish-menu-markup.hbs';
import dishList from './menu.json';

const menu = document.querySelector('.js-menu');
menu.innerHTML = dishMenuTemplate(dishList);
