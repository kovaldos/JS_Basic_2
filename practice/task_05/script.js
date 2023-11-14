// Задание 5 (тайминг 20 минут)
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const contentBlock = document.querySelector('.content');
const button = document.createElement('button');
contentBlock.appendChild(button);

let btnSendText = 'Отправить';
let btnSentText = 'Текст отправлен';

button.textContent = btnSendText;

button.addEventListener('click', () => {
  if (button.textContent === btnSendText) {
    button.textContent = btnSentText;
  }
  setTimeout(() => {
    button.textContent = btnSendText
  }, 1500);
})
