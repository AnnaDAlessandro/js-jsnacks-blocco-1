const arrayNome=[
`Alessia`,
`Marco`,
`Sofia`,
`Luca`,
`Francesca`,
`Davide`,
`Martina`,
`Andrea`
]

const arrayCognome=[
'De Santis',
`Zacchia`,
'Mazzarella',
`D'Alessandro`,
'Cecere',
'Marrone',
`Marano`,
`Gervasio`
]

const arrayNomeCognome=[]

for(let i=0; i < arrayCognome.length; i++) {
    arrayNomeCognome.push(arrayNome[i]+""+arrayCognome[i])
}

console.log(arrayNomeCognome)