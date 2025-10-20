/*
Detector de números mágicos. Número 4 dígitos, la suma del primer y último dan los dos del medio.
*/

let number = Number(prompt("Introduce el número"));
let last = number % 10;
let numbers = number % 1000;
let mid = (mid - last) / 10;
let first = (number - (number % 1000)) / 1000;

alert(first);
alert(mid);
alert(last);

if(first + last == mid) {
    alert ("Es mágico");
}else{
    alert ("No es");
}
