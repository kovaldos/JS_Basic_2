// Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из
// данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

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
