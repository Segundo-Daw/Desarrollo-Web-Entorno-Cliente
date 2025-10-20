/*
 Crear un menú contextual. Se repite hasta que el usuario elige la opción “Salir”.
*/

var option;
do{
    option = Number(prompt("Elija una opción:" +  "1.Sumar" + "2.restar" + "3.multiplicar" + "4.division" + "5.salir"));
    
}
while (option != 5);