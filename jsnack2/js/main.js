let parola1 = prompt("Inserisci una parola: ");
let parola2 = prompt("Inserisci un'altra parola: ");

let parole = [];
if (parola1.length > parola2.length) {
    parole[0] = parola1;
    parole[1] = parola2;
} else {
    parole[0] = parola2;
    parole[1] = parola1;
}

console.log(parole[0])
console.log(parole[1])