// const htmlEl = document.documentElement; // Получаем объект html
// const headEl = document.head; // Получаем объект head
// const bodyEl = document.body; // Получаем объект body

// // console.log(htmlEl);
// // console.log(headEl);
// // console.log(bodyEl);
// const firstChildNode = bodyEl.firstChild; // Получаем объект первый дочерний элемент body
// const lastChilsNode = bodyEl.lastChild; // Получаем объект последний дочерний элемент body

// // console.log(firstChildNode);
// // console.log(lastChilsNode);

// // Коллекция childNodes содержит список всех детей, включая текстовые узлы.
// const childNodes = bodyEl.childNodes;
// // console.log(childNodes);

// const bodyChildren = bodyEl.children;

// console.log(bodyChildren);

// Соседние и родительский узлы -------------------------------------------------------
// const prevSiblingNode = bodyEl.previousSibling;
// const nextSiblingNode = bodyEl.nextSibling;
// const parentNode = bodyEl.parentNode;

// console.log(prevSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// Соседние и родительский элементы ---------------------------------------------------

// const prevElement = bodyEl.previousElementSibling;
// const nextElement = bodyEl.nextElementSibling;
// const parentElement = bodyEl.parentElement;

// console.log(prevElement);
// console.log(nextElement);
// console.log(parentElement);

// // Первый и последний дочерние элементы------------------------------------------------
// const firstElChild = bodyEl.firstElementChild;
// const lastElChild = bodyEl.lastElementChild;

// console.log(firstElChild);
// console.log(lastElChild);

// Для проверки наличия дочерних узлов
// существует функция hasChildNodes() -------
// console.log(bodyEl.hasChildNodes());

// for (const node of childNodes) {
//   console.log(node);
// }

// childNodes.forEach(node => console.log(node));

// Поиск произвольного элемента
// elem.querySelectorAll(CSS)

// // Поиск по селектору класса -------
// const elemOne = document.querySelectorAll('.nav-menu');
// // console.log(elemOne);

// // Поиск по селектору тега -------
// const elemTwo = document.querySelectorAll('li');
// // console.log(elemTwo);

// // Поиск по смешанному селектору тега и класса ------
// const elemThree = document.querySelectorAll('li.nav-menu__item');
// // console.log(elemThree);

// // Поиск по тегу первого уровня вложенности -------
// const elemFour = document.querySelectorAll('.nav-menu>li');
// // console.log(elemFour);

// // Поиск по нескольким классам -------
// const elemFive = document.querySelectorAll('.nav-menu__link, .active');
// // console.log(elemFive);

// // Поиск по вложенным классам --------
// const elemSix = document.querySelectorAll('.nav-menu__link .active');
// // console.log(elemSix);

// // Поиск по #id ---------
// const elemSeven = document.querySelectorAll('#active-link');
// // console.log(elemSeven);
// // Поиск по атрибуту -------
// const elemEight = document.querySelectorAll('[data-item = "40"]');
// // console.log(elemEight);

// // console.log(elemTwo[1]);

// for (const el of elemTwo) {
//   console.log(el);
// }

// const listActiveItem = document.querySelector('.active');
// console.log(listActiveItem);

// Изменение документа

// Содержимое элемента innerHTML

// Получаем объект
// const textEl = document.querySelector('.nav-menu__item');
const heroTitle = document.querySelector('.hero__title');
// // Пролучаем содержимое объекта "как есть" вместе с HTML

// const titleText = heroTitle.innerHTML;
// console.log(titleText);

// heroTitle.innerHTML = `${titleText} <p class="hero__descr red" > Best food and drinks</p>`;

// const textElementContent = textEl.innerHTML;
// console.log(textElementContent);

// Перезаписываем содержимое
// const newText = (textEl.innerHTML = 'GoIT community');
// console.log(newText);

//  Полезная возможность безопасно перезаписать текст

const titleTextContent = heroTitle.textContent;
console.log(titleTextContent);

heroTitle.textContent = `${titleTextContent} and drinks`;
