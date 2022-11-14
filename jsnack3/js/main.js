"use strict";
let numeriDallUtente = [];
let inputNumero;
for (let i = 0; i < 10; i++) {
    inputNumero = parseFloat(prompt(`Inserisci un numero in posizione ${i+1}: `));
    numeriDallUtente[i] = isNaN(inputNumero) ? 0 : inputNumero;
}


console.log(numeriDallUtente.reduce(somma));
// La funzione Array.reduce viene usata per calcolare il totale

function somma(totale, prossimoNumero) {
    return totale + prossimoNumero;
}