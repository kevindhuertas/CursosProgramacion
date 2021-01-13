/*
------FUNCIONES DE REGISTRO
        console. 
        assert() - aparece un mensaje de error
        clear() -  limpiar
        error() - muestra mensaje de error 
                console.error("Que hiciste xdxdx")  // esto se mostara en la cnsola como error
        info() - mensaje informativo que se muestra en la consola 
                console.info ("hola que hace")
        log() - mensaje de depuracion (casi parecido a info y mas utilizado)
        table([array]) - nos da una tabla con la posicion y valor del array o objeto
        warm("bla bal") - advertencia en amarillo, no necesariamente esta mal el codigo solo esta advirtiendo
        dir() - ver datos en un alista interactiva de propiedades del objeto javascript especificado

-------CONTEO
        count() -  nos muestra cuantas veces se ejercuta algo
        countReset() - resetea la cuenta

-------FUNCIONES DE AGRUPACION
        group("nombre de grupos") - crear un grupo dentro de la consola
        groupEnd() -  termina el grupo
        groupCollased() - si queremos que empieze cerrado el grupo (osea constraido)


-------FUNCIONES DE TEMPORALIZACION
        time() - inicia un temporizador (saber cuanto tiempo pasa desde que el usuario hace una opcion)
        timeLog() - muestra cuanto tiempo a pasado desde que incio
        timeEnd() - termina el temporilador


----MODIFICAR EL ESTILO DEL TEXTO
        console.log("%texto", "color: red;background: red; padding: 20px 100px; border: 3px solid blue")

*/

/*
if (asistencia >= 90){console.log("%aprovaste","color:green;")
    }else{console.log("%reprobaste en asistencia","color:red;")}


alert("Promedio de materias sobre 10: ");
prompt(notas);
if (notas >= 7){console.log("%aprovaste","color:green")
    }else{console.log("%reprobaste en asistencia","color:red")}

alert("Porcentaje de trabajos practicos: ");
prompt(trabajos);
if (trabajos >= 70){console.log("%aprovaste","color:green")
    }else{console.log("%reprobaste en asistencia","color:red")}*/

    
let asistencia;
let trabajos;
let notas;

const materias = {
    mate : [90,7,85],
    fisica : [90,8,90],
    ingles : [40,3,3]
}
const aprovacion = () =>{
    for (materia in materias) {
        console.info(materia)
        if( materias[materia][0] >= 90 && materias[materia][1] >=7 && materias[materia][2] >=70 ){
            console.log(`aprovaste en ${materia}!!! FELICITACIONES`);
        }else{
            console.log(`reaprovaste en ${materia}:( f`);
        }
}
}
aprovacion();




