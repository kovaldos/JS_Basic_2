// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.
//
//   Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию)

// Сервис: https://jsonplaceholder.typicode.com

// API https://jsonplaceholder.typicode.com/photos

import {dataInfo} from "./data.js";

const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach((item) => {
  content.insertAdjacentHTML('beforeend', `
    <div class="card" id="${item.id}">
      <h4 class="card__title">${item.title}</h4>
      <img src="${item.url}" alt="${item.thumbnailUrl}" class="card__img"/>
    </div>
  `);
})
