
// const mayorEdad = (edad) => {
//     if (edad >= 18){
//         alert("Puedes pasar amigo")
//     }else{
//         alert("Perdon solo mayores de edad")
//     }
// }

// const entradaGratis = (tiempo) => {
//     if(tiempo == 2){
//         alert("La entrada es gratis")
//     }else{
//         alert("Perdon la entrada tienes que pagar")
//     }
// }

// edad = prompt("cual es tu edad? ");
// mayorEdad(edad);

// tiempo = prompt("Que hora es?");
// entradaGratis(tiempo);





let gratis = false; 

const verificarEntrada = (hora) =>{
    edad = prompt("cual es tu edad? ");

    if (edad >= 18){
        alert("Puedes pasar amigo")
        if(hora >= 2 && hora < 7 && gratis == false){
            alert("La entrada es gratis para ti guapo que viene a las 2 am")
            gratis = true;
        }else{
            alert(`Son las ${hora}, por lo que la entrada tienes que pagar`)
        }
        
    }else{
        alert("Perdon solo mayores de edad")
    }
}

verificarEntrada(.45);
verificarEntrada(0.2);
verificarEntrada(2);
verificarEntrada(43);
verificarEntrada(2);


