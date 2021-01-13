// Arrays ya es un objeto
//


let variable = 10;
Enter =  `<br><br>`; // ` ${cuanlquier varibale}` esto permite escrbir en varias lineas
let arrays = ["lucas",24,"aire"]

//CREAR UNA ARRAY

let frutas = ["manzana", "mango", "pera"]
document.write(frutas)
document.write(Enter)


// COMO LLAMAR A UN DATO DEL ARRAY en una POSISION

document.write(frutas[1])
document.write(Enter)

//ARRAYS ASOCIATIVOS  -->  objetos, aresido al jason
//                         un array comun se asocia con la posisiones [0] [1] [2]
//                         esta asociado a un nombre: elemento

let pc = {
    nombre: "SuperGamer",
    procesador: "Interl Core 7",
    ram: "16 GB",
    espacio: "1 TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `El nombre de mi PC es :  ${nombre}   <br>
             El procesador es :  ${procesador}   <br>
             La ram es :  ${ram}   <br>
             El espacio es :  ${espacio}   <br>` 


document.write(frase);
document.write(Enter);
document.write(`<h2> Bubles y arrays</h2> <br><br>`);


// BUCLES ---------------------------------------------------------------------------------


//WHILE ---------
var suma = 0;

while (suma<10) {
    document.write(suma, " ");
    suma++;
}
document.write(Enter, "do - while", "<br>");




// DO- WHILE ---------
//  do --> primero se hace y luego se pregunta

do {
    suma++;
    document.write(suma, " ");
} while (suma<20);


// FOR  (declaramos ; inicializamos ; iterar)

for (let i = 0; i < frutas.length; i++) {
    document.write( frutas[i],);
}

document.write(Enter);
let i= 0
for(i; i<6 ;i++){
    document.write(i, '<br>');
}
document.write(Enter);









// BREAK  en 15 --- CONTINUE en 12
for(let i = 0; i<20 ;i++){
    if (i == 12){
        continue;
    }
    document.write(i, '<br>');
    if (i == 15){
        break;
    }  
};
//SENTENCIA LABEL  ---- BREAK CONTINUE







document.write('<H2> FOR IN  /  FOR OF</H2>', '<br>');

let animales = ['gato', "perro", "dinosaurio"];
animales.tamaño = "grande";

//FOR IN -------- muestra la posicion de los elementos
//                recorrer objetos (hasta las prpiedades)
//                localizar objetos

for (animal in animales){
    document.write(animal, '<br>')
}


for (animal in animales){
    document.write(animales[animal], '<br>')
}


document.write(Enter);
//FOR ON------    muestra el   valor del elemento
//                recorre todos los elementos (no las  las propiedades)
for (animal of animales){
    document.write(animal, '<br>')
}


 


