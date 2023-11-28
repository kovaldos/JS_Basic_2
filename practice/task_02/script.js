// Задание 2 (тайминг 30 минут)
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// Функция, которая выводит в консоль id кнопки, на которую был клик
function handleClick(event) {
  console.log(`Вы нажали на кнопку ${event.target.id}`);
}

// Функция, которая считает количество кликов по кнопке 4 и выводит в консоль
function countClicks() {
  const countButton = document.getElementById('countButton');
  let clickCount = 0;

  return function () {
    clickCount++;
    console.log(`Вы нажали на кнопку 4 ${clickCount} раз(а)`);
  };
}

// Функция, которая изменяет текст кнопки на "Вы нажали на эту кнопку"
function changeText() {
  const changeTextButton = document.getElementById('changeTextButton');
  changeTextButton.textContent = 'Вы нажали на эту кнопку';
}

// Находим все кнопки
const buttons = document.querySelectorAll('button');

// Добавляем событие клика на каждую кнопку (1, 2, 3)
buttons.forEach(function (button) {
  button.addEventListener('click', handleClick);
});

// Добавляем событие клика на кнопку 4
const countButtonClickHandler = countClicks();
document.getElementById('countButton').addEventListener('click', countButtonClickHandler);

// Добавляем событие клика на кнопку 5
document.getElementById('changeTextButton').addEventListener('click', changeText);
