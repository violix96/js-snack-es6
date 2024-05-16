// reset js 
'use strict';

// controllo collegamento 

console.log('snack 1, sono connesso')

// creazione di un array di oggetti ogni oggetto rappresenta una bici da corsa 

const bici = [
    {
        nome : 'Canyon',
        peso : 10,
    },
    {
        nome : 'B-M-X',
        peso : 8,
    },
    {
        nome : 'SuperBike',
        peso : 12,
    },
    {
        nome : 'Shimano',
        peso : 7,
    },
    {
        nome : 'Trek',
        peso : 16,
    },
];

console.log(bici);


let biciLeggera = bici[0];


// ciclo for per iterare su tutte le biciclette dell'array
for (let i = 0; i < bici.length; i++){

    // se la bici corrente ha un peso minore rispetto a biciLeggera allora aggiorna biciLeggera
    if ( bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(`La bici più leggera è la ${biciLeggera.nome} con il peso di ${biciLeggera.peso} kg. `);