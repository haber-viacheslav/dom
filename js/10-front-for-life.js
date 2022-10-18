// const htmlEl = document.documentElement; // Получаем объект html
// const headEl = document.head; // Получаем объект head
const bodyEl = document.body; // Получаем объект body

// console.log(htmlEl);
// console.log(headEl);
// console.log(bodyEl);
const firstChildNode = bodyEl.firstChild; // Получаем объект первый дочерний элемент body
const lastChilsNode = bodyEl.lastChild; // Получаем объект последний дочерний элемент body

// console.log(firstChildNode);
// console.log(lastChilsNode);

// Коллекция childNodes содержит список всех детей, включая текстовые узлы.
const childNodes = bodyEl.childNodes;
// console.log(childNodes);

const bodyChildren = bodyEl.children;

// console.log(bodyChildren);

// Соседние и родительский узлы -------------------------------------------------------
// const prevSiblingNode = bodyEl.previousSibling;
// const nextSiblingNode = bodyEl.nextSibling;
// const parentNode = bodyEl.parentNode;

// console.log(prevSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// Соседние и родительский элементы ---------------------------------------------------

const prevElement = bodyEl.previousElementSibling;
const nextElement = bodyEl.nextElementSibling;
const parentElement = bodyEl.parentElement;

console.log(prevElement);
console.log(nextElement);
console.log(parentElement);

// Первый и последний дочерние элементы------------------------------------------------
const firstElChild = bodyEl.firstElementChild;
const lastElChild = bodyEl.lastElementChild;

console.log(firstElChild);
console.log(lastElChild);

// Для проверки наличия дочерних узлов
// существует функция hasChildNodes() -------
// console.log(bodyEl.hasChildNodes());

// for (const node of childNodes) {
//   console.log(node);
// }

// childNodes.forEach(node => console.log(node));
