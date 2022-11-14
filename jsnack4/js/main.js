let invitatiAllaFesta = ["Emanuele", "Diego", "Alessio", "Erika", "Andrea", "Thomas"];

String.prototype.toCapitalized = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let invitatoTrovato = false;
let nomeUtente = prompt("Inserisci il tuo nome: ");

for (let i = 0; i < invitatiAllaFesta.length; i++) {
    const invitato = invitatiAllaFesta[i];
    if (invitato == nomeUtente.toCapitalized()) {
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