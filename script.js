'use strict';

const adv = document.querySelector('.adv'),
   books = document.querySelectorAll('.books'),
   bookElems = document.querySelectorAll('.book'),
   headerBook3 = bookElems[4].querySelector('h2>a'),
   chaptersBook2 = bookElems[0].querySelectorAll('li'),
   chaptersBook5 = bookElems[5].querySelectorAll('li'),
   chaptersBook6 = bookElems[2].querySelectorAll('li'),
   chapter8Book6 = document.createElement('li');

// Восстановить порядок книг
books[0].prepend(bookElems[5]);
books[0].prepend(bookElems[3]);
books[0].prepend(bookElems[4]);
books[0].prepend(bookElems[0]);
books[0].prepend(bookElems[1]);
// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
// Исправить заголовок в книге 3
headerBook3.textContent = 'Книга 3. this и Прототипы Объектов';
// Удалить рекламу со страницы
adv.remove();
// Восстановить порядок глав во второй книге
chaptersBook2[3].after(chaptersBook2[6]);
chaptersBook2[6].after(chaptersBook2[8]);
chaptersBook2[9].after(chaptersBook2[2]);
// Восстановить порядок глав в пятой книге
chaptersBook5[2].before(chaptersBook5[9]);
chaptersBook5[2].before(chaptersBook5[3]);
chaptersBook5[2].before(chaptersBook5[4]);
chaptersBook5[5].before(chaptersBook5[6]);
chaptersBook5[5].before(chaptersBook5[7]);
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
chapter8Book6.textContent = 'Глава 8: За пределами ES6';
chaptersBook6[9].before(chapter8Book6);