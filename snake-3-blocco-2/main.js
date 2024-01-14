const arrayn=[
    24,13,7,56,39,18,42,
]

let sum=0;
for(let i=0; i<arrayn.length; i++) {
   if(i % 2 !== 0){
    console.log(sum+= arrayn[i])
   }

   document.writeln(`la somma dei numeri in posizione dispari è : ${sum}`)
    
}