// Задание 3 (тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

import {dataInfo} from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');

data.forEach((item) => {
  content.insertAdjacentHTML('beforeend', `
    <img src="${item.url}" alt="${item.thumbnailUrl}"/>
  `);
})
