// <div id="block">
//   <p>1</p>
//   <p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www.и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

const div = document.querySelector("#block p:first-child");
console.log(div);

const pWithClass = document.querySelectorAll(".www");
console.log(pWithClass[0]);
