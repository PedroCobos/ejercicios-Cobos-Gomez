
// break and continue
const score = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < score.length; i++){

 if(score[i] === 0){
     continue;
 }

    console.log('tu puntuación: ', score[i]);

    if(score[i] === 100){
        console.log('felicidades, obtuviste el puntaje más alto!');
        break;
    }
}

//By: PLCG