/*Blocco 1 - snake 6
-Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/



let numero= parseInt(
    prompt("Scrivi un numero",5)
    )
for(let i=0; i<numero; i++){
    let cubo= i**3

    console.log(cubo)
}