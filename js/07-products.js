import products from './data/proucts.js';

console.log(products);

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__price>Цена: 1111 кредитов</p>
</article>
*/
}

/*
 * Пишем функцию для создания карточки продукта
 */

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');
  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');
  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');
  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${price} credits`;
  priceEl.classList.add('product__price');
  productEl.append(nameEl, descrEl, priceEl);
  return productEl;
};

const productContainerEl = document.querySelector('.js-products');

console.log(makeProductCard(products[0]));

const elements = products.map(makeProductCard);

console.log(elements);
productContainerEl.append(...elements);
