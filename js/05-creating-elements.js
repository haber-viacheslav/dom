/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */

const titleEl = document.createElement('h1');
titleEl.classList.add('title-class');
titleEl.textContent = 'New Hero Title';
// console.log(titleEl);

// document.body.prepend(titleEl);
/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
imageEl.classList.add('hero-img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'New picture alpine-mountains-glacier';
imageEl.width = 350;
// console.log(imageEl.width);

// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
// console.log(navItemEl);

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.href = 'http://pomodoro.com';
navLinkEl.textContent = 'About Us';
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild); // вариант если нужно его вставить в начало
// navEl.insertBefore(navItemEl, navEl.children[1]); // второй вариант если нужно поставить его кудато в средину

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);
