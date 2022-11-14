"use strict";

function lerp(a, b, delta) {
    return (a * (1 - delta)) + (b * delta);
}

let numeroMassimo = parseInt(prompt("Inserisci un numero massimo da generare: "));
let numeroCasuale = Math.random();

numeroCasuale = Math.round(lerp(1, numeroMassimo, numeroCasuale));

let numeroScelto = parseInt(prompt("Scegli il tuo numero: "));

if (numeroScelto == numeroCasuale) {
    console.log("Hai vinto!");
} else {
    console.log(`Hai perso... il numero era ${numeroCasuale}`);
}