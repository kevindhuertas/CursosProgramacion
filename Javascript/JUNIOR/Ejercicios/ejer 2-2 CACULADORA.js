// // const suma = (num1, num2) => {
// //     total = num1 + num2;
// //     return total;
// // }
// // const resta = (num1, num2) => {
// //     total = num1 - num2;
// //     return total;
// // }
// // const multiplicacion = (num1, num2) => {
// //     total = num1 * num2;
// //     return total;
// // }
// // const division = (num1, num2) => {
// //     total = num1 / num2;
// //     return total;
// // }

const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicacion = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const division = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
//MEJORAS
const potencia = (num1, potencia) =>{
    return  num1 ** potencia;
}
const raizCuadra = (num1) => {return Math.sqrt(num1)} ; 
const raizCubica = (num1) => {return Math.cbrt(num1)} ; 



alert(`Que operacion quieres hacer?`)
let operacion = prompt(`suma: 1 resta: 2 multiplicacion: 3 division: 4 potencias: 5 raices cuadradas: 6  cubica: 7`)
if (operacion <= 4){
    let numero1 = prompt(`numero 1 = `);
    let numero2 = prompt(`numero 2 = `);

    if (operacion == 1) {
        resultado = suma (numero1,numero2); 
        alert(`tu resultado es: ${resultado}`) ;
    } else if (operacion == 2) {
        resultado = resta (numero1,numero2); 
        alert(`tu resultado es: ${resultado}`) ;
    } else if (operacion == 3) {
        resultado = multiplicacion (numero1,numero2); 
        alert(`tu resultado es: ${resultado}`) ;
    } else if (operacion == 4) {
        resultado = division (numero1,numero2); 
        alert(`tu resultado es: ${resultado}`) ;
    }
}
    if(operacion == 5){  
        let numero1 = prompt(`numero al que quiere sacar potencia: `);
        let potencia = prompt(`Potencia de: `);
        resultado = potencia (numero1,potencia); 
        alert(`Tu resultado es: ${resultado}`);
    }else if(operacion == 6) {
        let numero1 = prompt(`De que numero quiere sacar raiz cuadrada: `);
        resultado = raizCuadra(numero1); 
        alert(`Tu resultado es: ${resultado}`);

    }else if(operacion == 7){
        let numero1 = prompt(`De que numero quiere sacar raiz cubica: `);
        resultado = raizCubica(numero1); 
        alert(`Tu resultado es: ${resultado}`);
    } else{
        alert(`no hay ninguna operacion`);
    }
