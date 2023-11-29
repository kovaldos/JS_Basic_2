// Задание 4 (тайминг 20 минут)
//
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// Получаем ссылки на элементы DOM
const inputField = document.querySelector('#inputField');
const headerText = document.querySelector('#headerText');

// Обработчик события input для поля ввода
inputField.addEventListener('input', (event) => {
  // Обновляем текст заголовка с текстом из поля ввода
  headerText.textContent = event.target.value;
});
