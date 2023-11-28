// Задание 1 (тайминг 15 минут)
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
//

// Событие, которое срабатывает после загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
  console.log('Страница загрузилась');
});

// Событие onclick
function onClickHandler() {
  console.log('Событие onclick');
}

// Событие addEventListener
function addEventListenerHandler() {
  console.log('Событие addEventListener');
}

// Находим кнопку по id
const myButton = document.querySelector('.button');

// Добавляем событие onclick
myButton.onclick = onClickHandler;

// Добавляем событие addEventListener
myButton.addEventListener('click', addEventListenerHandler);
