// // Задание 4 (тайминг 15 минут)
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const content = document.querySelector('.content');

const button = document.createElement('button');
button.type = 'button';

button.textContent = "Click me";

button.style.display = "flex";
button.style.margin = "auto";

content.appendChild(button);

let counter = 0;

button.onclick = () => {
  counter ++;
  console.log(`Clicked ${counter} times`);
}

