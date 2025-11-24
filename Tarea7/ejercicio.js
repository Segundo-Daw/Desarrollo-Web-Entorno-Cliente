//1 - Crear un objeto persona con nombre, edad y ciudad. Acceder a sus propiedades con . y con [ ]. Cambiar el valor de edad y agregar una nueva propiedad profesión.


const persona =  {
    nombre : "Carolina",
    edad : 29,
    ciudad : "Fuenlabrada"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["ciudad"]);

persona.edad = 31;
persona.profesion = "Informático";

console.log(persona);

delete persona.ciudad;
console.log(persona);

// 2 - Añadir un método saludar() que muestre "Hola, soy <nombre>". Añadir un método cumplirAnos() que aumente la edad en 1.
persona.saludar = function() {
    alert("Hola, soy " + persona.nombre);
}

persona.cumplirAnos = function() {
    persona.edad += 1;
}

//3 - Usar delete para eliminar la propiedad ciudad. Mostrar el objeto antes y después.

console.log(persona);
delete persona.ciudad;
console.log(persona);

// 4 - Crea un array de estudiantes, cada uno con nombre y nota. Crea una función media() y otra aprobados() que devuelva un array con los alumnos con nota superior a 5.
let estudiantes = [
    { nombre: "Yolanda", nota: 6 },
    { nombre: "Ares", nota: 8 },
    { nombre: "Ruben", nota: 7 }
];

function media() {
    let sum = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        sum += estudiantes[i]["nota"];
    }

    return sum / estudiantes.length;
};

function aprobados() {
    let aprobados = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i]["nota"] > 5) {
            aprobados++;
        } 
    }

    return aprobados;
};

let media = estudiantes.media();
alert("Media: " + media);

let aprobados = estudiantes.aprobados();
alert("Aprobados: " + aprobados);

// 5.- Crea la función buscarPorNombre(nombre) que devuelva el objeto del estudiante correspondiente.
function buscarPorNombre(nombre) {
    let encontrado = false;
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i]["nombre"] == nombre) {
            encontrado = true;
            return estudiantes[i];
            
        } 
    }
    if (!encontrado) {
        return "No se ha encontrado el alumno";
    }
}

let buscar = estudiantes.buscarPorNombre("Carolina");
alert("Alumnos buscados: " + buscar);

//6 - Crea la función actualizarNota(nombre, nuevaNota) que cambie la nota del estudiante.

function actualizarNota(nombre, nuevaNota) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].nombre === nombre) {
            this[i].nota = nuevaNota;
            return this[i];
        }
    }
    return "No se ha encontrado el alumno";
};


