/*Ejercicio 5
Crea un menú que controle los datos de un array (como una lista de la compra), 
que permita añadir al final o al principio, eliminar alguno si existe o borrar 
todos, y a cada paso actualice (o vuelva a mostrar) la lista completa.
*/

let products = [];
let option;
var producto;


do{
    option = Number(prompt("LISTA DE LA COMPRA\n" + 
        "1.Añadir al final de la lista\n" +
        "2.Añadir al principio de la lista\n" + 
        "3.Eliminar producto\n" + 
        "4.Borrar todos\n" +
        "5.Mostrar lista\n" +
        "6.salir"));

    if(option == 1){
        /*Para añadir al final del array se utiliza push()  */
        producto = prompt("Introduce que quieres añadir a la lista de la compra: ");
        products.push(producto);

    }else if (option == 2){
        /* Para añadir al principio del array usamos unshift()  */
        producto = prompt("Introduce que quieres añadir al principio de la lista");
        products.unshift(producto);

    }else if(option == 3){
        /*Eliminar del array splice() */
        producto = prompt("Introduce qué producto quieres eliminar de la lista:");
        let index = products.indexOf(producto);    /*Para comprobar que el producto esta en la lista*/
        if (index !== -1) {   /*Si es diferente a -1 significa que si existe y se puede eliminar*/
            products.splice(index, 1);  /* index nos dice que elemento eliminar, y 1 indica la cantidad*/
            alert(producto + " eliminado correctamente.");
        } else {
            alert("Ese producto no está en la lista.");
        }
    }else if (option == 4){
        /*Eliminar el array entero*/
        products.length = 0;
        alert("Lista borrada por completo.");
    }else if (option == 5){
        /*Para mostrar el array y su contenido  */
        if (products.length === 0) {
            alert("Tu lista de la compra está vacía.");
        } else {
            alert("Tu lista de la compra tiene:\n" + products.join("\n"));
        }
    }else if( option == 6){
        alert("Saliendo de la lista de la compra...")
    }else{
        alert("Opción inválida");
    }
}while (option != 6);