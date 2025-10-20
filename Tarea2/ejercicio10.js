/*
Mostrar los primeros 100 números primos.
*/

let notPrime = false;
let numberCounter =0;   //se van acumulando para tener 100 números primos
let number = 0;

do{
    number++;
    for(let i=2; i < number && notPrime == false;i++){
        if (number % i == 0){
            notPrime = true;
        }
    }
    if (!notPrime){
        console.log(number);
        numberCounter++;
    }
    notPrime = false;
}while (numberCounter < 100);


