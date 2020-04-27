//callbacks & foreach

//const myFunc = (calbackFunc) =>{
    //do something
 //  let value = 50;
  //  callbackFunc(value);
//};
//myFunc(value =>{
    //do something
   // console.log(value);
//});


//callbacks & foreach
let people = ['paco', 'rafa', 'manuel', 'gerardo', 'luis'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

//By: PLCG