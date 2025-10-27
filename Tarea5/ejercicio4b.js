//Otra forma de hacerlo

let size1 = Number(prompt("¿Cuántos números tendrá el primer conjunto?"));
let size2 = Number(prompt("¿Cuántos números tendrá el segundo conjunto?"));
let size3 = Number(prompt("¿Cuántos números tendrá el tercer conjunto?"));


let set1 = new Set();
for (let i = 0; i <size1; i++){
    let n = prompt("Introduce número:");
    set1.add(n);
}

let set2 = new Set();
for (let i = 0; i <size2; i++){
    let n = prompt("Introduce número:");
    set2.add(n);
}


let set3 = new Set();
for (let i = 0; i <size3; i++){
    let n = prompt("Introduce número:");
    set3.add(n);
}


let dif = new set();

for (const n of set1){
    let tiene1 = set2.has(n);
    let tiene2 = set3.has(n);
    if(!tiene1 && !tiene2){
        dif.add(n);
    }
}

for (const n of set2){
    let tiene1 = set3.has(n);
    let tiene2 = set1.has(n);
    if(!tiene1 && !tiene2){
        dif.add(n);
    }
}

for (const n of set3){
    let tiene1 = set1.has(n);
    let tiene2 = set2.has(n);
    if(!tiene1 && !tiene2){
        dif.add(n);
    }
}

for (const n of dif){
    alert(n);
}