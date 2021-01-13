//   FUNCIONES ----------
//                      una porcion de codigo que hace algo
//                      


//Como se hacen comunmente...

function Enter(){
    document.write(`<br><br>`)
}

function saludar(){
            saludo = prompt("Hola como estas?");
        if (saludo == "bien"){
            alert("Me alegro")
        }else{
            alert('que pena')
        }
}

saludar22 = function(){
    saludo = prompt("Hola como estas?");
if (saludo == "bien"){
    alert("Me alegro")
}else{
    alert('que pena')
}
}


//Llamo la funcion
saludar22();

//RETURN ---> nos de un valor (con tipo de dato)

function retorna(){
    alert("holi de voy a retornar");
    return "la funcion se ejecuto correctamente";
}

let saludardo = retorna();
document.write(saludardo)
Enter();




//PARAMETROS-----

function suma (num1,num2){
    let suma = num1 + num2;
    return suma;
}

let resultado = suma(12,32)
document.write(resultado)


// SCOPE --> es la clasificacion de una varible si es regional o global

//FUNCIONES FLECHA
//                  otra forma de crear funciones

const saludarnos = (nombre)=> {
    document.write(`Hola ${nombre}, como estas? `)
}

// cuando solo tiene un parametro se puede quitar parentesis
const saludarnos = nombre => document.write(`Hola ${nombre}, como estas? `);

//puedes poner un return ahi mismo...  => return document.....
const saludarnos = nombre => document.write(`Hola ${nombre}, como estas? `);
