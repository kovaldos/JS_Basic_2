// Задание 3 (тайминг 30 минут)
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// Функция для добавления заголовка
const addHeader = () => {
  // Создаем элемент h1
  const header = document.createElement("h1");
  // Устанавливаем текст заголовка
  header.textContent = "Новый заголовок";
  // Добавляем заголовок в конец body
  document.body.appendChild(header);
  // Добавляем класс для стилизации
  header.classList.add("added-header");
};

// Функция для удаления заголовка
const removeHeader = () => {
  // Находим первый элемент h1 внутри body
  const header = document.querySelector("h1.added-header");
  // Если заголовок найден, удаляем его
  if (header) {
    header.remove();
  }
};

// Функция для вывода сообщения при наведении на кнопку
const showHoverMessage = () => {
  console.log("Вы навели на данную кнопку");
};

// Функция для вывода сообщения при уходе с кнопки
const showOutMessage = () => {
  console.log("Наведения на кнопку больше нет");
};

// Добавляем обработчики событий к кнопкам
document.getElementById("addHeaderBtn").addEventListener("click", addHeader);
document.getElementById("removeHeaderBtn").addEventListener("click", removeHeader);
document.getElementById("hoverBtn").addEventListener("mouseover", showHoverMessage);
document.getElementById("hoverBtn").addEventListener("mouseout", showOutMessage);
