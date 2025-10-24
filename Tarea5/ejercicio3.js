/*
EJERCICIO 3
Copia el ejercicio del menú de inicio de sesión y convierte los arrays en un
mapa.
*/



let usuarios = new Map([
    ["Carolina" , "hola"],
    ["Yolanda", "flor"],
    ["Ares", "gato"]
]);
let option;
/*
usuarios.has(nombre) → verifica si el usuario existe.

usuarios.set(nombre, contraseña) → agrega un nuevo usuario.

usuarios.get(nombre) → obtiene la contraseña guardada.

usuarios.size() → devuelve todos los nombres de usuario.
*/

do{
    option = Number(prompt(
        "Elije la opcíon que prefieras:\n" +  
        "1.Registrarse\n" + 
        "2.Incio de sesión\n" +  
        "3.Ver usuarios\n" +  
        "4.Salir\n"));

    if (option == 1){
        let usuarioValido = false;
        let nombreUsuario = " ";

        /*-repite el bucle hasta que se introduzca un usuario válido*/
        while(!usuarioValido){

            nombreUsuario = prompt("Introduce el nombre del usuario:");
        

            if (usuarios.has(nombreUsuario)){   //verifica si el usuario existe
                alert("Ese nombre de usuario ya existe");
            }else{
                usuarioValido = true;
                let nuevaContraseña = prompt("Introduce la contraseña que quieres utilizar: ");
                usuarios.set(nombreUsuario, nuevaContraseña);
                alert ("El usuario nuevo se ha registrado");

            }
        }
    }else if (option == 2){
        let usuarioIntroducido = prompt("Ingresa tu usuario: ");
        if (usuarios.has(usuarioIntroducido)){
            let contrasenaIntroducida = prompt("Introduce la contraseña:");
            let contrasenaCorrecta = usuarios.get(usuarioIntroducido);
            if (contrasenaIntroducida === contrasenaCorrecta){
                alert("Bienvenido!!");
            }else{
                alert ("Contraseña Incorrecta");
            }
        }else{
            alert("El usuario no existe!!!!")
        }
        
    }else if (option === 3) {

        let ver = usuarios.keys();
        for(let i = 0; i < usuarios.size; i++){
            alert(ver.next().value);
        }
            
    }else if (option === 4) {
        alert("Saliendo del sistema.");
    }else{
        alert("Opción inválida. Por favor, elige una opción del 1 al 4.");
    }
}while(option != 4);


/*
es otra forma de hacer la opcion 3


if(usuarios.size === 0){
            alert("No hay usuarios registrados");
        }else{
            let listaUsuarios = "Usuarios registrados:\n"; /*Se crea una variable que contiene el texto incial
            for (let [usuario] of usuarios){
            listaUsuarios += " - " + usuario + "\n";
            }
        alert(listaUsuarios);
        }       

*/