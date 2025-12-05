class Auto extends Vehiculo{
    constructor(marca, modelo, ano, puertas){
        super(marca,modelo,ano);
        this.puertas = puertas;
    }


    descripcion(){
        return super(this.descripcion()) + "\nEl número de puertas es: " + this.puertas;
    }


}