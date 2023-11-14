// Задание 2 (тайминг 25 минут)
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//   <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>
//
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const textELem = document.querySelector('.text');
const h2Elem = textELem.previousElementSibling;
console.log(h2Elem);
const content = h2Elem.parentElement;
console.log(content);
const imgElem = document.querySelector('img');
console.log(imgElem);
const parentElem = content.parentElement;
console.log(parentElem);
