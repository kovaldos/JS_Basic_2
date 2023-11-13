// Задание 2 (тайминг 15 минут)

// 1.
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/

const link = document.querySelector('.link');
link.textContent = "link text js";
// link.href = "https://developer.mozilla.org/ru/";

link.setAttribute('href', 'https://developer.mozilla.org/ru/');

console.log(link);

// 2.
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const imgPhoto = document.querySelector('.photo');
imgPhoto.src = "https://cs14.pikabu.ru/post_img/big/2023/07/12/5/1689144756289570349.png";
imgPhoto.width = 300;





