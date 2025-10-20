/*
 Bonus NAVASESH: numero que vas sumando sus dijitos hasta que se quede solo conn un digito
 Ejemplo: Numero 542 >> 5+4+2 = 11    >> 1+1 = 2 (resultado final)
*/


let number = Number(prompt("Introduce el número para calcular el Navasesh"));

while (number >= 10){    // al poner que sea mayor o igual a diez es para que el número sea de dos dígitos
    var adittion = 0;
    while (number > 0){
        adittion += number % 10;
        number = Math.floor(number/10)
    }
    number = adittion;
}
    alert ("La suma es " + adittion);