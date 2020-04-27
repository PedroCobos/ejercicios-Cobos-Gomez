//template strings
const title = 'El año de bicho Covid -> 2019';
const author = ' PLCG ';
const likes = -1;

//opc1  cadenas de plantillas
        //let result = 'El blog se llama: ' + title + ' De:' + author + 'Tiene: ' + likes + ' likes';
        //console.log(result);

//opc2  forma de cadena de plantilla

       // let result = `El blog se llama: ${title} De: ${author} Tiene: ${likes} likes`;
       // console.log(result);

//crear plantillas html
let html = `
 
        <h2> ${title}</h2>
        <p>by ${author}</p>

        <spam>This blog has ${likes} likes</spam>
`;

console.log(html);

//By: PLCG