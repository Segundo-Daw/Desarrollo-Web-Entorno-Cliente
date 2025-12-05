class Vehiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Métodos
    //descripción(), que debe devolver un texto que descriva el vehículo
    descripcion(){
        return console.log("El vehículo es de la marca: " + this.marca + "\nEl modelo es: " + this.modelo + "\nEl año de fabricación es: " + this.ano);
    }

    //edad(), devuelve cántos años tiene el vehículo
    edad(){
        let fechaActual = 2025; 
        let fechaCoche = this.ano;
        let totalanos = fechaActual - fechaCoche;
        return console.log("El coche tiene " + totalanos + " años");
    }

}

const vehiculo1 = new Vehiculo ("Skoda" , "SuperB", 2009);
vehiculo1.descripcion();
vehiculo1.edad();

