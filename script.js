const body = document.querySelector('body');
const allBooks = document.querySelectorAll('.book');
const booksBlock = document.querySelector('.books');
const book2 = allBooks[0].querySelector('ul');
const book5 = allBooks[5].querySelector('ul');
const book6 = allBooks[2].querySelector('ul');
const chapter8 = document.createElement('li');


booksBlock.prepend(allBooks[1]);
allBooks[3].before(allBooks[4]);
booksBlock.append(allBooks[2]);

body.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";

booksBlock.children[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

body.querySelector('.adv').remove();

book2.children[3].after(book2.children[6]);
book2.children[4].after(book2.children[8]);
book2.children[9].after(book2.children[2]);

book5.children[1].after(book5.children[9]);
book5.children[2].after(book5.children[4]);
book5.children[3].after(book5.children[5]);
book5.children[8].after(book5.children[6]);

chapter8.textContent='Глава 8: За пределами ES6';

book6.children[8].after(chapter8);


console.log(allBooks);