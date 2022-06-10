let number = [1,2,3,4,5,6,7,8,9,10];

 let  filtered = number.filter(evenNumbers);

console.log(filtered);

function evenNumbers(number) {
    return number % 2 === 0;
}

//const evenNumbers2 = (number) => number % 2 ===0
let a = evenNumbers(5);
console.log(a)


//Trier le tableau en Affichant tous les nombres supérieurs à 7

// console.log(tableau);
// function nombresSuperieurASept(nombre){
//     return nombre > 7 ;
// }
//
// let nombre1 = nombresSuperieurASept(14);
// console.log(nombre1);

let tableau = [1, 3, 6, 8, 11];

const nombresSuperieurASepts = (nombre) => nombre > 7;

let filterNombre = tableau.filter(nombresSuperieurASepts);
console.log(filterNombre);

//
let programmers = [
    {nom: 'TOMENOU', specialite: 'PHP'},
    {nom: 'VIDEGNON', specialite: 'JavaScript'},
    {nom: 'KELANY', specialite: 'FullStack'},
    {nom: 'DADE', specialite: 'PHP'},
    ];

let p =  programmers.filter(function (programmer){
    return programmer.specialite === 'PHP'
})

console.log(p)
//Filtrer les programmers faisant php

//console.log(programmers[0].specialite)

// function filtreProgrammers(specialite){
//     for (let i = 0; i <programmers.length ; i++) {
//         //console.log(programmers[i])
//       specialite =  programmers[i].specialite === 'PHP';
//         console.log(specialite)
//     }
// return specialite;
//
// }

//const filtreProgrammers = (specialite) => programmers.specialite === 'PHP';

// let phpProgrammers = filtreProgrammers('js')
// console.log(phpProgrammers)

//console.log(phpProgrammers);

// let programer1 = filtreProgrammers('PHP');
// console.log(programer1)




