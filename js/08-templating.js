/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */
const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = 'New Title';
// titleEl.innerHTML = '<button type="button"> New Title </button>'; // переписать на новое
// console.log(titleEl.innerHTML);
// titleEl.innerHTML = '';
// titleEl.innerHTML = `<a href=""> This is link)</a>`;
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';

/*
 * Вставка разметки с insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML('afterbegin', `<a href=""> This is link</a>`);
