/*
EJERCICIO 5
Se introduce la nota numérica del examen y devuelve categoría 
(suspenso, aprobado, notable…).
*/

var nota = Number (prompt("Introduce la nota: "));

if (nota < 5){
    alert("Suspenso");
}else if (nota >= 5){
    alert("Aprobado");
}else if (nota >=7){
    alert("Notable");

}else if (nota >= 9 && nota <= 10){
    alert("Sobreslaiente");
}else{
    alert("Nota inválida");
}