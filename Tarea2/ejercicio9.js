/*
 Crear el juego de piedra papel o tijera. (Podemos investigar math.random()).

*/

var aleatorio = Math.floor(Math.random() * 3)+1;
alert ("BIENVENIDO AL JUEGO DE PIEDRA, PAPEL O TIJERA. ¿ESTÁS LISTO?");

var option = Number (prompt("Introduce 1 si quieres sacar PIEDRA, 2 si quieres sacar PAPEL y 3 si quieres sacar TIJERA"));

if (aleatorio == 1){
    alert ("YO: PIEDRA");
    if (aleatorio == option){
        alert ("TU: Piedra.... EMPATE");
    }else if (option == 2){
        alert ("TU: Papel.... Pierdes");
    }else if (option == 3){
        alert ("TU: Tijera.... perdiste");
    }else{
        alert("opción inválida")
    }
}else if (aleatorio == 2){
    alert("YO: PAPEL");
    if (aleatorio == option){
        alert ("TU: Papel.... EMPATE");
    }else if (option == 1){
        alert("TU: Piedra...pierdes");
    }else if (option == 3){
        alert ("TU: Tijera... Has GANADO");
    }else{
        alert("Opción inválida");
    }
}else if (aleatorio == 3){
    alert("YO: TIJERA");
    if (aleatorio == option){
        alert ("TU: Tijera .... EMPATE ");
    }else if (option == 1){
        alert ("TU: Piedra.... pierdes");
    }else if (option == 2){
        alert ("Papel.... pierdes");
    }else{
        alert("Opción inválida");
    }
}else{
    
}
