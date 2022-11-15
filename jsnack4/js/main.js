"use strict";
let invitatiAllaFesta = ["Emanuele", "Diego", "Alessio", "Erika", "Andrea", "Thomas"];


let invitatoTrovato = false;
let nomeUtente = prompt("Inserisci il tuo nome: ");


for (let i = 0; i < invitatiAllaFesta.length; i++) {
    const invitato = invitatiAllaFesta[i];
    if (toCapitalized(invitato) == toCapitalized(nomeUtente)) {
        invitatoTrovato = true;
        console.log(`Benvenuto/a alla festa, ${invitato}!`);
    } else if (nomeUtente.toUpperCase() == nomeUtente) {
        invitatoTrovato = true;
        console.log(`Benvenuto alla festa, signor Bryan!`);
    }
}

if (invitatoTrovato == false) {
    console.log("Non siete stati invitati alla festa, mi spiace!");
}































function toCapitalized(myString) {
    return myString.charAt(0).toUpperCase() + myString.slice(1);
}