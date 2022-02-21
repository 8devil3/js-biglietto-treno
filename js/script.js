let distanza;
let eta;
let prezzo = 0.21;
let sconto_1 = 0.2;
let sconto_2 = 0.4;
let importo;
let output = document.getElementById("importoOutput");


// prompt
distanza = prompt("Quanti chilometri vuoi percorrere?", "Inserisci un numero");
eta = prompt("Quanti anni hai?", "Inserisci un numero");


// condizioni
if (eta < 18) {
    importo = Math.round(((((prezzo * distanza) - (prezzo * distanza * sconto_1))) + Number.EPSILON) * 100) / 100;
} else if (eta > 65) {
    importo = Math.round(((((prezzo * distanza) - (prezzo * distanza * sconto_2))) + Number.EPSILON) * 100) / 100;
} else {
    importo = Math.round((((prezzo * distanza)) + Number.EPSILON) * 100) / 100;
}

importo = importo.toFixed(2).toString();
importo = importo.replace(".",",");


// output
output.innerHTML = "<strong>" + importo + "</strong>";