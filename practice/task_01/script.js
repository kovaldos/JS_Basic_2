// Задание 1 (тайминг 20 минут)

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

document.querySelector('#submitButton').addEventListener('click', () => {
  const agreeCheckbox = document.querySelector('#agreeCheckbox');
  const errorMessage = document.querySelector('#error-message');

  if (!agreeCheckbox.checked) {
    errorMessage.textContent = 'Необходимо согласиться с условиями';
  } else {
    errorMessage.textContent = ''; // Очищаем сообщение об ошибке, если чекбокс выбран
  }
});
