// reset js 
'use strict';

// controllo collegamento 

console.log('snack 2, sono connesso')


//  creazione array di oggetti di squadre di calcio
const clubs = [
    {
        nome : 'Arsenal',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Manchester City',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Liverpool',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Aston Villa',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Tottenham',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Chelsea',
        puntiFatti : 0,
        falliSubiti : 0,
    },

]

console.log(clubs);


// funzione per generare numeri casuali 
function randomProperties(min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

// itero attraverso ogni squadra e assegno punti fatti e falli subiti casuali
for (let i = 0; i < clubs.length; i++){

clubs[i].puntiFatti = randomProperties(0, 100);

clubs[i].falliSubiti = randomProperties(0, 100);



}


// nuovo array contenente solo nomi e falli subiti delle squadre
const nomiEFalliSubiti = clubs.map(clubs => ({
    nome : clubs.nome,
    falliSubiti : clubs.falliSubiti,
}));


// stampa in console del nuovo array con solo i nomi e i falli subiti 
console.log(nomiEFalliSubiti);