//variables & block scope
const age = 30;

if(true){
    const age  = 40;
    const name = 'pedro';
    console.log('dentro del bloque de código lst: ', age, name);

    if(true){
        const age = 50;
        console.log('dentro del segundo bloque de código:', age);
       
    }
}

console.log('bloque de código externo: ', age, name);

//By: PLCG