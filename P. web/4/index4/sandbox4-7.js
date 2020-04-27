
 // get a reference to the 'ul'
 const ul = document.querySelector('.People');

 const people = ['lui', 'solis', 'pablo', 'pedro', 'alex'];

 let html = ``;

 people.forEach(person => {
    //create html template
    html += `<li style="color: blue">${person}</li>`;
 });

 console.log(html);
ul.innerHTML = html;

//By: PLCG