// Задание 3 (тайминг 20 минут)
// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const content = document.querySelector('.content');
const contentText = document.createElement('p');
contentText.textContent = "Новый текстовый элемент";
content.appendChild(contentText);
console.log(content);

const removeContent = (parent, child) => {
  setTimeout(() => {
    parent.removeChild(child);
  },2000)
};

removeContent(content, contentText);

