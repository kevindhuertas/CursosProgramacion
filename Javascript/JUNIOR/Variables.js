//          VARIABLE: un espacio en la memoria  -> guarda un dato

//Undefined -->  Variable existe pero no tiene valor (no esta declara| no existe)
// Null -->  que la variable no va a valer nada  (Vacio) intencionalmente
//NaN --> (Not a Nunmber) cuando la operacion requiere numeros (multiplicamos 1 por letras)


//var, let, const  --> declarar una variable
    //var --> alcanze global
    //let --> alcance local
    //const --> contante q nunca cambia (se debe inicializar sino sale error)

//declarar una variable
var decladara;

//inicializar:
string = "cadena de texto"

numero = 1;
booleano = false;

let numero1 = 29, numero2 = 43;
let numero3 = 33; 

//alert(numero1);

//Scope --> que la pariables
//Hoisting --> habla de se crea y llama a una funcion antes de ser creado

let nombre = prompt("hola rancia dime tu nombre");
alert("hola" + nombre)



//OPERADORES DE ASIGNACION: +=  | -=  | *= |  /= 
//                          %= -> modulo
//                          **= -> exponente                
//                        
//OPERADORES NUMERICOS: toma tatos numericos 
//                          + | -  |  /  |  **
//                          --    -> resta uno 

resultado1= 10
document.write(--resultado1)


// CONCATENACIÓN  --> Unir strings  + ------------------------------------
// 
saludo= "Hola pedro ";
pregunta = "como estas? ";
numeroS = 1;

frase = "" + numeroS + saludo + pregunta;
document.write(frase);

fraseConcatenada = saludo.concat(numeroS); // string.concat(cualquier Dato)
document.write(fraseConcatenada);

//ESCRIBIR EN HTML DENTRO DE JS
let numeroPro = 999;
MejorFormaDeConcatenar =  `Soy ${numeroPro} hol
a que hace dewdewdwe
<h1> Titulo </h1>`; // ` ${cuanlquier varibale}` esto permite escrbir en varias lineas
document.write(MejorFormaDeConcatenar)


//OPERADORES -----------------------------
//OPERADORES COMPARACION   --> devulve un True o False
//                         a == b    iguales   ("23" es igual a 23 --> true)
//                         a  !=b    distintos
//                         a === b   identicos (mismo tipo de dato y mismo valor)
//                         a !== b   no identicos

//                         a < b   
//                         a >= b  


//OPERADORES LOGICOS
//                         &&  -> And
//                         ||  -> or
//                         !  -> not --> !false es igual a true
num1 = 12;
num2 = 46;
num3 = 32;
num4 = 54;
op = (num1 > num2 || num3 > num4) && (num1 < num3 && num2 < num1)
document.write(op)


//CamelCase  --> primera letra en minuscula y luego la segunda palabra con mayuscula
//javascript funciona asi
funcionesCamelCaseSiempre = "siempreCamelCase"







//CONDICIONAL -------------------------------------------

if (false) {
    alert("Hola")
} else if (false){
    alert("el primer else if es true")
} else{
    alert ("else")
}
