// Задание 4 (тайминг 25 минут)
// <form action="#">
//   <input type="text">
//     <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить,
// а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const form = document.querySelector('form');
const input = form.querySelector('input[type = "text"]');
const submitBtn = form.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const errorMessage = document.createElement('h2');
  if (input.value === '') {
    errorMessage.textContent = 'Can not be blank!';
    input.style.border = '1px solid red';
  } else {
    errorMessage.textContent = 'Done!';
    input.style.border = '1px solid green';
  }
  form.appendChild(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, 1500)
})


