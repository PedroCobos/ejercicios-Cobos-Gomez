/////////////////////////////////////////////////////
// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
        const paras = document.querySelectorAll('p');
        const errors = document.querySelectorAll('.error');

    console.log(paras, errors);
    console.log(paras[1], errors[0]);

///////////////////////////////////////////////////////
// obtener un elemento por ID
        const title= document.getElementById('titulo de pagina');
        console.log(title);

    // obtener elementos por su nombre de clase
    const errors = document.getElementsByClassName('error');
        console.log(errors);
                console.log(errors[0]);

    // obtener elementos por su nombre de etiqueta
        const paras = document.getElementsByTagName('p');
            console.log(paras);
            console.log(paras[1]);

/////////////////////////////////////////////////////

    const para = document.querySelector('p');

    // console.log(para.innerText);
    // para.innerText = 'los juegos son lo mejor;

        const paras = document.querySelectorAll('p');

        // paras.forEach(p => {
        //   console.log(p.innerText);
        //   p.innerText = 'nuevo texto!';
        // });

        const content = document.querySelector('.content');

        // console.log(content.innerHTML);
        // content.innerHTML = '<h2>Es un nuevo h2</h2>';

        // content.innerHTML += '<h2>Este es un h2 agregado al contenido</h2>';

        const gente = ['pedro', 'pablo', 'ivan'];

        gente.forEach(persona => {
             content.innerHTML += `<p>${persona}</p>`;
            });

/////////////////////////////////////////////////////
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.Eldiarioqroo');
link.textContent = 'La pagina del periodico';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: blue');


/////////////////////////////////////////////////////

const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'brobluewn';
title.style.fontSize = '55px';
title.style.margin = '';

/////////////////////////////////////////////////////

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

/////////////////////////////////////////////////////

const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

const title = document.querySelector('h7');

    console.log(title.parentElement);
    console.log(title.parentElement.parentElement);
    console.log(title.nextElementSibling);
    console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);

/////////////////////////////////////////////////////


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});

/////////////////////////////////////////////////////

const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

        button.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = 'algo nuevo que hacer';
        //ul.appendChild(li);
        ul.prepend(li);
        });

            const items = document.querySelectorAll('li');

                    items.forEach(item => {
                    item.addEventListener('click', e => {
                        // e.target.style.textDecoration = 'line-through';
                        e.target.remove();
                    });
                    });

/////////////////////////////////////////////////////

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'otra cosa que hacer';
  ul.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  // console.log('evento en UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});

/////////////////////////////////////////////////////
onst copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OH! mi contenido tiene derechos de autor!!');
});

    const box = document.querySelector('.box');

            box.addEventListener('mousemove', e => {
            // console.log(e);
            // console.log(e.offsetX, e.offsetY);
            box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
            });

            document.addEventListener('wheel', e => {
            console.log(e.pageX, e.pageY);
            });


/////////////////////////////////////////////////////


const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
        popup.style.display = 'block';
        });

                close.addEventListener('click', () => {
                popup.style.display = 'none';
                });

                popup.addEventListener('click', (e) => {
                if(e.target.className === 'popup-wrapper'){
                    popup.style.display = 'none';
                }
                });


                BY:PLCG