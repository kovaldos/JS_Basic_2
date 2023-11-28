// Задание 4 (тайминг 30 минут)
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// Получаем ссылки на элементы DOM
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const addClassBtn = document.getElementById('addClassBtn');
const myList = document.getElementById('myList');

// Функция для добавления нового элемента списка
const addListItem = () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Новый элемент списка';
  myList.appendChild(newItem);
};

// Функция для удаления первого элемента списка
const removeFirstItem = () => {
  const firstItem = myList.querySelector('li');
  if (firstItem) {
    myList.removeChild(firstItem);
  }
};

// Функция для добавления класса "click"
const addClassToButton = () => {
  addClassBtn.classList.add('click');
};

// Назначаем обработчики событий
addBtn.addEventListener('click', addListItem);
removeBtn.addEventListener('click', removeFirstItem);
addClassBtn.addEventListener('click', addClassToButton);
