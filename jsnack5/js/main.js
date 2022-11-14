let numeriDallUtente = [];


let numeroNuovo
for (let i = 0; i < 6; i++) {
    numeroNuovo = parseInt(prompt(`Inserisci un numero a posizione ${i+1}: `))
    if (numeroNuovo % 2 == 1) {
        numeriDallUtente.push(numeroNuovo);
        // let len = numeriDallUtente.length
        // numeriDallUtente[len] = numeroNuovo
        // Mi sono reso conto solo dopo che anche questo funzionerebbe
    }
}

for (let i = 0; i < numeriDallUtente.length; i++) {
    const numero = numeriDallUtente[i];
    console.log(numero);
}