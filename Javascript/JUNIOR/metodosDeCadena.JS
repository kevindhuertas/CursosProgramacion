// Metodo de cadena:  
/*
concat()  - junta dos o mas cadenas y retorna una nueva

TRUE/FALSE
sartWith()  -  Verifica si una cadena empieza con la letra al principio (Start), devuelve true o false
endWith()  -  lo mismo pero al final
includes()  -si una cadena ouede encontrar dentro de otra cadena, devuelve true, sino false
indexOf()  -devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
            nos devuelve la posicion del caracter dedonde empieza lo que se busca en los ()
lastIndexOf() - devuelve ultimo indice del primer caracter de la cadena, si no existe, devuleve -1

RELLENAR----------
padStart() - [propuesta estandar] - rellanar cadena al principio con caracteres deseados
padEnd() [propuesta de ECMA] - Rellenar cadena al final con caracteres deseados
repeat()- Devuelve la misma cadena pero repetida la cantidad


TRANFORMA CADENA -----------
split()- Divide la cadena como le pidamos --> CONVIERTE A ARRAY
substring() - Nos retorna un pedazo de la cadena que seleccionamos //genera otro string
toLowerCase() - Covierte cadena minusculas
toUpperCase() - Covierte cadena mayusculas
toString() - Convertir un dato(numero o lo que sea ) a un STRING

trim() - elimina los espacios en blanco al principio y al final
trimEnd() - elimina espacios en blanco al final
trimStart() - lo mismo al principio
valouOf() - retorna el valor primitivo de un objeto String





*/
function imprimir (cadena){ document.write(cadena +'<br>');}



let cadena = "Cadena de prueba";
let cadena2 = new String("Y prueba"); //lo mismo que arriba TODO ES OBJETO EN JS
let cadena3 = "Holi ";
let cadenaComas = "perro,gato,paloma"
let cadenaEspacios = "Yo estoy estudiando programacion"

imprimir( cadena.concat(" concat hola"));
imprimir( cadena.startsWith(cadena2));
imprimir( cadena.endsWith(cadena2));

imprimir(('<br>----Include----'));
imprimir( cadena.includes(cadena2)); //True si forma parte de la cadena (EN CUAQUIER PARTE)
imprimir( cadena.includes("Cadena"));


imprimir( cadena.indexOf("prueba"));
imprimir( cadena.indexOf("holi"));
imprimir( cadena.lastIndexOf("prueba"));

imprimir((''));
imprimir(cadena[10]);         
imprimir(cadena.padStart(30,"swas")); //RELLENA ESPASCIOS que faltan para completar (30) con caracteres que le indiquemos 
imprimir(cadena.padEnd(30,"swas")); //RELLENA ESPASCIOSque faltan para completar (30) al final con caracteres que le indiquemos 

imprimir( cadena3.repeat(10));       
imprimir("");
imprimir("Tranformar cadenas--->");

//convertir a un array
imprimir(cadenaComas.split(","));
imprimir(cadenaEspacios.split(" "));

imprimir(cadenaEspacios.substring(1, 7)); //GENERA OTRO STRING desde posicion dela cadena (1 incluido, 7 no incluido)

imprimir(cadenaEspacios.toUpperCase()); //Lo mismo con el toLowerCase
let numero = 50; 
imprimir(numero.toString())


imprimir("");
imprimir("Quitar espacios trim() y ademas length")
let cadenaMuchosEspacion = "     hola  que    hace    ";
imprimir(cadenaMuchosEspacion)
imprimir('La cadena tiene de caracteres :' + cadenaMuchosEspacion.length)
let CadenaSinEspaciosTrim = cadenaMuchosEspacion.trim();
imprimir('La cadena tiene de caracteres :' + CadenaSinEspaciosTrim.length)



/*
                *******METODOS DE ARRAYS*******

---TRANSFORMADORES  --> cambian al array
pop() - elimina el utilmo elemento de un array y lo devuelve (si llamo a pop me muestra el que me elimino)
shift() - elimina el primer elemento de un array y lo devuelve (lo mismo de arriba)
push() - agrea un elemento al array al final de la lista
reverse () -  invierte el orden de los elementos de array
unshift() - agrega uno o más elementos al incio del array, y devuekve la nueva longitud del array
sort() - ordena los elemento de un arreglo(array) localmente y devuelve el arreglo ordena
        orden de diccionario
splice() - cambia el contenido de un array eliminando elementos existentes y\o agregando nuevo elementos


----ASESORES ----
join() - une todos los elementos de un array en una cadena de texto con un separador si queremos en ("...")
slice() -  devuelve una parte del array dentro del nuevo array empezando por unicio hasta fin (fin no incluido)
Metodos ya vistos: 

                    toString();
                    indexOf()
                    lastIndexOf()
                    include()           paramentros con llamada a cada elementos


----DE REPETICION ---
filter() -  crea un nuevo array con todos los elemetos que cumplan la condicion
forEach() -  ejercuta la funcion indicada una vez po cada elementos del array
map() --- aprender yo 
*/



let nombre = ["pedro", "Maria", "Juan", "Diego", "Daniel"];
imprimir(`<br>Array original: ` + nombre);
imprimir("ultimo elemento removido" + nombre.pop());
imprimir("primer elemento removido"+ nombre.shift());

imprimir(`<br>Array Luego: ` + nombre + `<br>`);

imprimir("agregar elelemto: 'Marciana' "); 
nombre.push("Marciana"); //Si imprimos nos iindica cuantos elementos tiene ahora el array
imprimir(`Array Luego: ` + nombre);

let numeros = [1,2,3,4,5];
imprimir(`<br>Array original: ` + numeros);
numeros.reverse();
imprimir(`Array Luego de reverse: ` + numeros);

numeros.unshift(0,99); //
imprimir(`Aggrego valores al incicion unshift(0,99): ` + numeros);

numeros.sort();
imprimir(`Aggrego valores al ordenar: ` + numeros);



numeros.splice(1,3); //(DONDE ARRANCA (-1 para el final), VAMOS A ELIMINAR _ ELEMETNOS (0 para no eliminar), REMPLAZO con lo que ponga en los siguientes,,,,,,,)
imprimir(`Aggrego valores con splice: ` + numeros);



//------ACCESORES-----
imprimir(`<br><br>`+"----Asesores ---- no modifican el array")
resultado = numeros.join(" - ") ; // Nos separa todos loe elemtos con ()
imprimir("Con join ( - ): " + resultado + "     -> cadena de texto");
resultado = numeros.join(`<br> Numero: `) ;
imprimir(`Numero: ` + resultado);

resultado = numeros.slice(1,-1);
imprimir("Usar slide: " + resultado);



imprimir(`<br><br>`+"---- RETICIONES ---- bucles en array");
imprimir(`<br>Array original: ` + nombre);

nombre.filter((elemento) => { //NUMERO VA A SER EL eemento en cada vuleta que haga
    document.write(elemento + `<br>`)
})
imprimir(`<br>`);//lo mismo :
nombre.forEach((elemento) => { //NUMERO VA A SER EL eemento en cada vuleta que haga
    document.write( `bucle: ` + elemento + `<br>`)
})

//FILTER CREA NUEVAO ARRAY CON LA CONDICION
resultado = nombre.filter(elemento => elemento.length > 4);
imprimir("Con condicion de mayor de 4 letras: " + resultado + `<br>`)