// Задание 3 (тайминг 20 минут)
//
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const passwordInput = document.querySelector('#passwordInput');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === 'пароль') {
    passwordInput.classList.remove('error');
    passwordInput.classList.add('success');
  } else {
    passwordInput.classList.remove('success');
    passwordInput.classList.add('error');
    const error = document.createElement('span');
    error.textContent = 'Пароль неверный';
    document.body.appendChild(error);
    setTimeout(() => {
      error.remove();
    },1500);
  }
});
