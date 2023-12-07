const URL = 'data.json';

const featuredItems = document.querySelector('.featured__list');

const fetchFeaturedData = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Failed to fetch data from JSON');
    const data = await response.json();
    data.forEach(({url, img, alt, name, desc, price}) => {
      const productCard = `
        <li class="featured__item">
          <a href="${url}" class="featured__card card">
            <img 
              src="${img}"
              alt="${alt}"
              class="card__img"
            >
            <div class="card__desc">
              <h3 class="card__title title title--h4">${name}</h3>
              <p class="card__text text text--s">${desc}</p>
              <span class="card__price">$${price}</span>
            </div>
          </a>
        </li>
      `;
      featuredItems.insertAdjacentHTML('beforeend', productCard);
    })
  } catch (error) {
    console.error(error);
  }
}


if (featuredItems) {
  fetchFeaturedData();
}
