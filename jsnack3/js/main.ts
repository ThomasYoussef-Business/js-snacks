"use strict";
let numeriDallUtente: number[] = [];

for (let i = 0; i < 10; i++) {
    numeriDallUtente[i] = parseFloat(prompt(`Inserisci un numero in posizione ${i+1}: `) ?? '0');
}

console.log(numeriDallUtente.reduce(somma));

function somma(totale: number, prossimoNumero: number) {
    return totale + prossimoNumero;
}