"use strict";
/*
Per arrivare da un numero all'altro, possiamo usare Math.random come una percentuale
Quindi se numeroCasuale (o d per Delta) è 0.5,
il nostro numero più piccolo è 1, o l per Lower Bound,
mentre il nostro numero più grande è 10, o u per Upper Bound,
la nostra equazione diventa

(u - l)             * d                 + l
^                ^                   ^
Prendi la       Calcola la        Riaggiungi la
differenza      posizione con     base
la percentuale

d(u - l) + l
è la nostra formula finale
*/
function lerp(l, u, d) {
    return d * (u - l) + l;
}

let numeroMassimo = parseInt(prompt("Inserisci un numero massimo da generare: "));
let numeroCasuale = Math.random()

for (let i = 0; i < 500; i++) {
    const rngl = Math.random() * 100;
    const rngu = Math.random() * 100;
    const rngd = 0.01;
    console.log(`Lower Bound: ${rngl}
    Upper Bound: ${rngu}
    Delta: ${rngd}
    Random Number: ${Math.round(lerp(rngl, rngu, rngd))}`);
}