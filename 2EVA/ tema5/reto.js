//crea un programa que muestre un recordatorio al usuario cada 5 sergunfos. Si el usuario pulsa aceptar, el recordatorio continua. si pulsa cancelar, el recordatiorio no se repite más. 
/*
const intervalo = setInterval(()=>{
        const respuesta = confirm("¿Quieres que se siga ejecutando?");
        if(!respuesta){
            clearInterval(intervalo);
            console.log("Intervalo detenido");   
        }            
}, 5000);
*/


// localStorage y sessionStorage
/*
let usuario = localStorage.getItem("usuario");
    if(!usuario){
        usuario = prompt("¿Cómo te llamas?");
        if (usuario){
            localStorage.setItem("usuario", usuario);
        }else{
            usuario = "invitado";
        }
    }
alert (`¡hola, ${usuario}!`);
*/

//para ver toda la infomración de la página
/*
console.log(navigator);
*/

//RETO 2
//Crea un programa que vaya mostrando por consola cada cierto numero de segundos si hay o no conexion a interneet
/*
setInterval(() => {
    if (navigator.onLine) {
        console.log("Hay conexión");
    } else {
        console.log("No hay conexión");
    }
}, 5000);
*/

//Ejercicio 1 - Muestra en consola datos sobre la URL actual:
/*    
    - location.href
    - location.protocol
    - location.host
    - location.pathname
*/
/*
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
*/

//Ejercicio 2 - Crea una página que pasados 5 segundos te redirija a otra (cambia haref)
/*
setInterval(() => {
    window.location.href = "https://www.google.com";
}, 5000);
*/

//Un prompt que pregunte si cambiar de página para llevarnos a otro.html y despues en esa pagina que vuelva a salir un mansaje en el que pregunte si quieres volver a la anterior


const respuesta = confirm("¿Quieres que te mande a otra página?");

if(respuesta){
    location.href = "http://localhost:3000/2EVA/%20tema5/ejercicio1.html";
}





