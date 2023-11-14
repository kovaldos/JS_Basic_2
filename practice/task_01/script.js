// Задание 1 (тайминг 25 минут)
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

const block = document.querySelector('.block');
const itemDiv = document.createElement('div');
itemDiv.classList.add('item');
itemDiv.textContent = 'Элемент внутри';
itemDiv.style.color = 'blue';
itemDiv.style.border = '1px solid #000';
itemDiv.style.backgroundColor = '#f8f8f8';
itemDiv.style.padding = '16px';
block.setAttribute('class', 'item_1');
block.appendChild(itemDiv);
