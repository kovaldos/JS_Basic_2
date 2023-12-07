const URL = 'data.json';

const productBox = document.querySelector('.product__box');
const fetchData = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Failed to fetch data from JSON');
    const data = await response.json();
    data.forEach(({name, img, alt, price, color, size, quantity}) => {
      const productCard = `
        <div class="product">
          <button class="btn__del"></button>
          <div class="product__content">
            <img class="product__img" src="${img}" alt="${alt}" />
            <div class="product__desc">            
              <h2 class="product__name">${name}</h2>
              <ul class="product__options product-options">
                <li class="product-options__item">
                  Price: <span class="product__price">$${price}</span>
                </li>
                <li class="product-options__item">
                  Color: <span class="product__color">${color}</span>
                </li>
                <li class="product-options__item">
                  Size: <span class="product__size">${size}</span>
                </li>
                <li class="product-options__item">
                  <label class="product-options__label">
                    <span>Quantity: </span>
                    <input type="text" class="product-options__quantity" value="${quantity}" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;
      productBox.insertAdjacentHTML('beforeend', productCard);
    })

  } catch (error) {
    console.error(error);
  }
}


if (productBox) {
  fetchData();
}


