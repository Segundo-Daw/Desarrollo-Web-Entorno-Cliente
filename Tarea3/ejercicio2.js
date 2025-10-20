/*
2. Sistema de inicio de sesión y registro con arrays(menú incluído).
*/

var usuarios = ["Carolina", "Yolanda", "Ares" ];
var contrasenas = ["hola", "flor", "gato" ];
let option;


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

        /*-repite el bucle hasra que se intreoduzca un usuario válido*/
        while(!usuarioValido){
        nombreUsuario = prompt("Introduce el nombre del usuario:");
        let existe = false;   /*Comienza siendo False porque no se ha comprobado todavía repitiendose el bucle mientras exista, y solo termina cuando es nuevo*/
        /*Para comprobar si el nombre ya existe */
        for(let i=0; i< usuarios.length; i++){
            if(usuarios[i] === nombreUsuario){
            existe = true;    /*Cuando lo crea */
                }
            }
        if (existe){
            alert("Ese nombre de usuario ya existe. Por favor, intenta con otro.")
        }else{
            usuarioValido = true;
            let nuevaContrasena = prompt("Introduce la contraseña:");
            usuarios[usuarios.length] = nombreUsuario; 
            contrasenas[contrasenas.length] = nuevaContrasena;
            alert("Usuario registrado con éxito.");
        }
        }
    }else if (option == 2){
        let usuarioIntroducido = prompt("Ingresa tu usuario: ");
        let encontrado = false; /* Bandera oara verificar si el usuario existe */
        let i = 0; /* Índice para recorrer el array, empieza en 0 porque empieza desde el priemro de la lista */
        
        while (i < usuarios.length && !encontrado) {   /*Mientras no se haya encontrado y no se haya llegado al final del array*/
            if (usuarios[i] === usuarioIntroducido) { /*Si el usuario introducido es igual al que está en la posición i del array*/
                encontrado = true; /*Se ha encontrado el usuario*/
                let contrasenaIntroducida = prompt("Ingresa tu contraseña:"); /*Pide la contraseña*/
                if (contrasenaIntroducida === contrasenas[i]) {
                    alert("¡Bienvenido " + usuarioIntroducido + "!");
                } else {
                    alert("Contraseña incorrecta");
                }
            }
        i++;
        }
        if(!encontrado){
            alert("El usuario no existe");
        }
}else if (option === 3) {
    let lista = "Usuarios registrados:\n"; /*Se crea una variable que contiene el texto incial*/
    for (let i = 0; i < usuarios.length; i++) { /* Se recorre el array de usuarios */
      lista += "- " + usuarios[i] + "\n"; /* Se añade cada usuario a la lista en cada bucle*/
    }
    alert(lista);
}else if (option === 4) {
    alert("Saliendo del sistema.");
}else{
    alert("Opción inválida. Por favor, elige una opción del 1 al 4.");
}
}while(option != 4);