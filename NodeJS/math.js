let Math = {};
function sumar(num1,num2){
    return num1+num2;
}
function restar(num1,num2){
    return num1 - num2;
}

function multiplicar(num1,num2){
    return num1 * num2;
}
function dividir(num1,num2){
    if (num2 == 0){
        return console.log('No puedes dividir por 0 !!');
    }else{
        return num1 / num2;
    }
}

Math.sumar = sumar;
Math.rest = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

module.exports = Math; //PERMITE EXPORTAR OBJETOS, fUNCIONES, VARIABLES


/* exports.sumar = sumar;
exports.rest = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir; */


