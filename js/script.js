let distanzaKm;
let etaAnni;
let prezzoUnitario = 0.21;
let moltiplicatoreScontoMinorenni = 0.8;
let moltiplicatoreScontoSenior = 0.6;
let importoFinale;
let output = document.getElementById("importoOutput");



// prompt
distanzaKm = prompt("Quanti chilometri vuoi percorrere?", "Inserisci un numero");
etaAnni = prompt("Quanti anni hai?", "Inserisci un numero");



// condizioni
if (isNaN(distanzaKm) || isNaN(etaAnni)){
    alert("Per favore inserisci solo caratteri numerici. La pagina verrà ricaricata.");
    location.reload();
}


if (etaAnni < 18) {
    importoFinale = prezzoUnitario * distanzaKm * moltiplicatoreScontoMinorenni;
} else if (etaAnni > 65) {
    importoFinale = prezzoUnitario * distanzaKm * moltiplicatoreScontoSenior;
} else {
    importoFinale = prezzoUnitario * distanzaKm;
}


    
// arrotondamento
importoFinale = Math.round((importoFinale + Number.EPSILON) * 100) / 100;
importoFinale = importoFinale.toFixed(2).replace(".", ",");



// output
output.innerHTML = "<strong>€ " + importoFinale + "</strong>";