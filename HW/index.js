const mockProductsFile = 'data.json'; // Имя файла с моковыми продуктами
const cartKey = 'cartData';
const featuredItems = document.querySelector('.featured__list');
const cartList = document.querySelector('.cart__list');

// Функция для загрузки данных из JSON файла
async function loadJSONFile(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${file}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading JSON file ${file}:`, error);
    throw error;
  }
}

// Загрузка моковых данных при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const mockProducts = await loadJSONFile(mockProductsFile);
    renderFeaturedProducts(mockProducts);
    loadCartData();
    updateCartVisibility();
  } catch (error) {
    console.error('Failed to initialize:', error);
  }
});

// Обработчик клика по кнопке "Add to Cart"
featuredItems.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card__add-to-cart')) {
    const productInfo = event.target.closest('.featured__item');
    const productId = productInfo.dataset.productId;

    try {
      const mockProducts = await loadJSONFile(mockProductsFile);
      const selectedProduct = mockProducts.find(product => product.url === productId);
      if (selectedProduct) {
        // Проверка, есть ли уже товар в корзине
        const existingCartItem = findCartItem(selectedProduct);
        if (existingCartItem) {
          // Увеличение количества товара в корзине
          increaseCartItemQuantity(existingCartItem);
        } else {
          // Добавление товара в корзину
          addToCart(selectedProduct);
        }
        // Сохранение данных корзины в localStorage
        saveCartData();
      }
    } catch (error) {
      console.error('Failed to handle "Add to Cart" click:', error);
    }
  }
});

// Функция сохранения данных корзины в localStorage
function saveCartData() {
  const cartListItems = Array.from(cartList.children).map((item) => {
    return {
      id: item.dataset.productId,
      color: item.querySelector('.cart-item__color').textContent.trim(),
      size: item.querySelector('.cart-item__size').textContent.trim(),
      img: item.querySelector('.cart-item__img').src,
      name: item.querySelector('.cart-item__name').textContent.trim(),
      price: item.querySelector('.cart-item__price').textContent.trim().replace('$', ''),
      quantity: parseInt(item.querySelector('.cart-item-options__quantity').value, 10),
    };
  });
  // Сохранение данных в localStorage
  localStorage.setItem(cartKey, JSON.stringify(cartListItems));
}

// Функция загрузки данных корзины из localStorage
function loadCartData() {
  const savedCartData = localStorage.getItem(cartKey);
  const cartListItems = JSON.parse(savedCartData || '[]');

  // Добавление товаров в корзину
  cartListItems.forEach(product => {
    addToCart(product);
  });
}

// Функция добавления товара в корзину
function addToCart(product) {
  const cartListItem = document.createElement('li');
  cartListItem.classList.add('cart-list__item');
  cartListItem.dataset.productId = product.url; // Используем product.url в качестве уникального идентификатора
  cartListItem.innerHTML = `
    <div class="cart__item cart-item">
      <button class="btn btn--reset cart-item__remove">&#10060;</button>
      <div class="cart-item__content">
        <img class="cart-item__img" src="${product.img}" alt="${product.alt}" />
        <div class="cart-item__desc">            
          <h2 class="cart-item__name">${product.name}</h2>
          <ul class="cart-item__options cart-item-options">
            <li class="cart-item-options__item">
              Price: <span class="cart-item__price">$${product.price}</span>
            </li>
            <li class="cart-item-options__item">
              Color: <span class="cart-item__color">${product.color}</span>
            </li>
            <li class="cart-item-options__item">
              Size: <span class="cart-item__size">${product.size}</span>
            </li>
            <li class="cart-item-options__item">
              <label class="cart-item-options__label">
                <span>Quantity: </span>
                <input type="text" class="cart-item-options__quantity" value="${product.quantity}" />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  // Обработчик клика по кнопке удаления товара из корзины
  cartListItem.querySelector('.cart-item__remove').addEventListener('click', () => {
    cartListItem.remove();
    updateCartVisibility();
    // Сохранение данных корзины в localStorage после удаления товара
    saveCartData();
  });

  // Добавление товара в список корзины
  cartList.appendChild(cartListItem);

  // Обновление видимости корзины
  updateCartVisibility();
}

// Функция поиска товара в корзине по идентификатору
function findCartItem(product) {
  return Array.from(cartList.children).find(item => item.dataset.productId === product.url);
}

// Функция увеличения количества товара в корзине
function increaseCartItemQuantity(cartListItem) {
  const quantityElement = cartListItem.querySelector('.cart-item-options__quantity');
  const quantity = parseInt(quantityElement.value, 10);
  quantityElement.value = String(quantity + 1);
}

// Функция обновления видимости корзины
function updateCartVisibility() {
  const cart = document.querySelector('.cart');
  if (cartList.children.length > 0) {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
}

// Функция отрисовки товаров на странице
function renderFeaturedProducts(products) {
  products.forEach((product, index) => {
    const productCard = `
      <li class="featured__item" data-product-id="${product.url}">
        <div class="featured__card card card--home-page">
          <div class="card__pic">
            <img src="${product.img}" alt="${product.alt}" class="card__img">
            <button class="card__add-to-cart card-btn btn btn--empty">
              <span class="card-btn__icon">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z" fill="white"/>
                </svg>
              </span>
              <span class="card-btn__text">Add to Cart</span>
            </button>
          </div>
          <a href="${product.url}" class="card__desc">
            <h3 class="card__title title title--h4">${product.name}</h3>
            <p class="card__text text text--s">${product.desc}</p>
            <span class="card__price">$${product.price}</span>
          </a>
        </div>
      </li>
    `;
    featuredItems.insertAdjacentHTML('beforeend', productCard);
  });
}
