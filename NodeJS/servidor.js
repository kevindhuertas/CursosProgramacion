const http = require('http');

const handleServer = function(req,res){ //(req) = peticion ,,  (res) = response
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(`<h1>Hola mundo desde node.js</h1>`);
    res.end();
}


const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('server en puesto: 3000');
});


/* 
PARA SIMPLIFICAR TODO SE UTILIZA fRAMEWORKS

npm: node package manager  //administrador de paquetes node
    administrar paquetes

www.npmjs.com
//repositorio mas grande del internet
// puedo buscar en su buscador .. por ejempo usando las aplicaciones que sube la genete
// si busco color
        

        al instalar un modulo
    Esto no se cambia

    ./node_modules   : carpeta onde se descarga el modulo dentro del proyecto
    ./package-lock.jason : almacena la informacion de donde se descargo


    Cuando creo mi app tengo muchos modulos, y tocaria volver a instalar todo
    asi que mejor se pone todo como una lista
   
   
    npm init  //el sistema espera que le de informacion de mi proyecto
    PACKAGE.JASON : ES UN ARCHIVO DE CONFIGURACION
                    le da informacion de lo que necesito en mi proyecto  
        scripts -->
        "start":"node index.js"  para arracar este archivo al poner
                                npm start
        "nsandienw":"node index.js" para iniciar cualquier cosa que queramos
                                npm run nsandienw


                                
*/

//LLAMO MODULO COLORS
const color = require('colors');
console.log('Mensaje de Coloresss! :)'.rainbow);