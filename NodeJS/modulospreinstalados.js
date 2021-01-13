//Modulos se pueden ver en la documentacion de node.js
//Node.js hace que el ordenador ejecute JS

//MODULOS COR: son los de bajo nivel

//MODULO OS
const os = require('os'); // ('./') El ./ es para modulos dentro de nuestra carpeta
                          // hay que guardarlo en una constante (si se puede con el mismo nombre del modulo)

console.log(os.platform());
console.log(os.release());
console.log(`free memory`,os.freemem());
console.log(`total memory`,os.totalmem());



//MODULO FILE SISTEM
const fs = require('fs'); //nos permite trabajar con archivos del sistema
//Pramaetros wriet FILE: (nombre archivo, contenido ,Call back : es una funcion cuando se termino de hacer el archivo)
//Esto esta delegado en el sistema operativo
fs.writeFile('./texto.txt','linea 1', function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Archivo creado");
    }
}); //CODIGO ASINCRONO : las tareas asincronas estan repartidas para que el codigo siga ejecutandose y sin pararse


console.log('ultima linea de codigo');
//const result = fs.write("",'',..)  Codigo BLOQUEANTE porque node.js no va a pasar al siguiente codigo hasta que no termine




fs.readFile('./texto.txt', function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})



