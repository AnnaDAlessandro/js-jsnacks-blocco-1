/*Blocco 1 - JSnack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let sum=0;

for( let i=0; i<10; i++){

    let numero= parseInt(
    prompt("Scrivi un numero", RandoNumber(0,50))
    )
    

    console.log(sum+=numero)
}

document.writeln(sum)



function RandoNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
