//Utiliza este objeto àra mostrar un String con este formato:

//Buenos días, hoy es martes 25 de novienbre de 2025
/*

console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.toDateString());

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

*/

//Para lo dias de la semana(que aparezca el nombre y no el número de la semana)
let diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

let fecha = new Date();

let numeroDia = fecha.getDay();
let nombreDia = diasSemana[numeroDia];

//Para los meses (que no aparezca el número sino el nombre del mes)
let meses = ["Enero", "Febrero" , "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let numeroMes = fecha.getMonth();
let nombreMes = meses[numeroMes];


console.log("Buenos días, hoy es " + nombreDia + " " +  fecha.getDate() + " de " + nombreMes + " de " + fecha.getFullYear());

console.log("La hora es: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());



