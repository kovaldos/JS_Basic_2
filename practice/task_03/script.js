// Задание 3 (тайминг 20 минут)
// <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

const h2Element = document.querySelector('.subtitle');

// Получить все родительские элементы и вывести их в консоль
const parents = [];
let currentParent = h2Element.parentNode;
const body = document.querySelector('body');

while (currentParent !== body) {
  parents.push(currentParent);
  currentParent = currentParent.parentNode;
}

console.log(parents);

