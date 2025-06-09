// arquivo script.js
// Acesse o elemento where-are-you.
// Acesse parent a partir de where-are-you e adicione uma color a ele.
// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
// Acesse o first-child a partir de parent.
// Acesse o first-child a partir de where-are-you.
// Acesse o texto Attention! a partir de where-are-you.
// Acesse o third-child a partir de where-are-you.
// Acesse o third-child a partir de parent.

const whereAreyou = document.getElementById('where-are-you');

const img = document.createElement('img');

img.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png';

img.className = 'img-class-3';
console.log(img.className.includes('class'));

whereAreyou.appendChild(img);
