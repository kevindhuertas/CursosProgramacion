const express = require('express'); // Nos devulve un objeto
const app = express(); //ESTE ES MI SERVIDOR
const morgan = require('morgan'); //middleware
//Static FILES
//Middleware que permite llevar archivos html, css, javascript al front End
//Al final


//Settings
app.set('appName','Este es mi aplicacion'); //Creo variable (nombre, descripcion) La puedo llmar al crear el server
app.set('port', 4000); //Varable reservadas
app.set('view engine','ejs');//MOTOR DE PLANTILLAS


//MiddleWare: funcionan para procesar datos antes que llegue a una ruta (debe estar arriba)
function logger(req,res,next){ //Req es la informacion del navegador que me manda al servidor
    console.log(`Route Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}   
app.morgan('dev');
//app.use(logger);      //Middleware que puede ser reemplado por morga('dev')
app.use(express.json()); //Para que pueda recibir objetos json

/* Morgan-Middleware

*/



app.get('/',(req,res)=>{    //recivo ese llamado get con (RUTA,(req,res))
    res.send('Hello Word');  // Quiero responder con esto
});
//Iniciando servidor
app.listen(5000,() =>{
    console.log("Server en el puerto 5000")
});




/*Conceptops
Routing (RUTAMIENTO):   
*/

app.get('/about',(req,res)=>{    //recivo ese llamado get con (RUTA,(req,res))
    res.send('About me'); 
});

app.all('/user',(req,res,next)=>{ //APP.ALL es un codigo que va a pasar siempre qe se haga un get o post....
    console.log('Por aqui paso');
    next()
});




/* npm i nodemos -d   --> -D (--save -day)

NODEMON PARA QUE ESTE ATENTO DE MI ARCHIVO JS
npx nodemon index.js

*/
//METODOS HTTP  --> get, head , post, put, delete, patch
//Metodos piden algo a mi servidor
/* Get: devolver cosas
Post: recibir dato y guardarlo en una base de datos o procesarlo  y devolver una respuesta
Put: tomar datos del front end  y luego devolver
Delete: Va a elinar un dato en el servidor y devulve un dato
 */

app.get('/contact',(req,res)=>{    
    res.send('Formulario de contacto con get'); 
});
app.post('/postear',(req,res)=>{               
    res.send('Peticion de post recibida'); 
});
/* PARA PROBAR  */
app.put('/user/:id',(req,res)=>{    
    res.send(`Usuario ${req.params.id} con put`); 
});
app.delete('/user/:userId',(req,res)=>{    
    res.send(`Usuario ${req.params.userId} ha sido eliminado`); 
});


app.get('/user',(req,res)=>{    
    res.json({
        "username" : "cameron",
        "lastname" : "Garcia"
    }); //DEVUELVO OBJETO
});
app.post('/user/:id',(req,res)=>{           //La ID es una variable q se guarda en params--> req.params
    console.log(req.body);          //Informacion 
    console.log(req.params);
    res.send('Peticion de post recibida'); 
});

//STATIC FILES
app.use(express.static('./public'))