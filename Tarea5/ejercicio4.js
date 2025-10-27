/*
EJERCICIO 4
BONUS Pide tres conjuntos al usuario por teclado e indica cuáles no se
repiten
*/

let numeros = Number(prompt("Introduce cuantos digitos vas a querer tener en tu  primer conjunto"));
const conjunto1 = new Set ();

for (let i = 0; i < numeros; i++){
    let numeroIntroducido  = Number(prompt("Introduce número"));
    conjunto1.add(numeroIntroducido);
}


let numeros2 = Number(prompt("Introduce cuantos digitos vas a querer tener en tu  segundo conjunto"));
const conjunto2 = new Set ();

for (let i = 0; i < numeros2; i++){
    let numeroIntroducido  = Number(prompt("Introduce número"));
    conjunto2.add(numeroIntroducido);
}

let numeros3 = Number(prompt("Introduce cuantos digitos vas a querer tener en tu  tercer conjunto"));
const conjunto3 = new Set ();

for (let i = 0; i < numeros3; i++){
    let numeroIntroducido  = Number(prompt("Introduce número"));
    conjunto3.add(numeroIntroducido);
}



//  Calcular cuáles no se repiten 
//primero unidos todos los conjuntos en un solo set y usamos el operador ... para convertilos en un array
const todos = new Set([...conjunto1, ...conjunto2, ...conjunto3]);

const repetidos = new Set(
  [...conjunto1].filter(n => conjunto2.has(n) || conjunto3.has(n)) && ([...conjunto2].filter(n => conjunto3.has(n)))
);
                                        // se deja pasar solo los números que no se repiten en el conjunto anterior
const noRepetidos = [...todos].filter(n => !repetidos.has(n));

alert("Los números que no se repiten en ningún conjunto son: " + noRepetidos.join(", "));