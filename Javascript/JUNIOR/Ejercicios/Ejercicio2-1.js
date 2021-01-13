
let cantidadEstu = prompt("cuantos estudiantes hay? ");
let alumnosTotales= [];

for(i = 0; i < cantidadEstu; i++){
    alumnosTotales[i] = [ prompt("Nombre del alumno" + (i + 1)),0]
}
document.write(alumnosTotales + `<br>`)



const alumnosPresentes = (nombre, posicion) => {
    let presencia = prompt (`Esta presente : ${nombre} ?`);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[posicion][1]++;
    }
}

for(i=0; i<3 ; ++i){
    for (alumnos in alumnosTotales){
        alumnosPresentes(alumnosTotales[alumnos][0], alumnos);
    }
    
}
for (alumnos in alumnosTotales){
        let resultado = (`<br> El alumno: `+ alumnosTotales[alumnos][0] + `<br>
                    --------asisitio: `+ alumnosTotales[alumnos][1] + `<br>
                    --------faltas:`+ (3 - alumnosTotales[alumnos][1]));
        if((3 - alumnosTotales[alumnos][1]) < 2){
            resultado += `<br> <b style= 'color: green'> Aprobado </b> <br><br>`
        }else{
            resultado += `<br> <b style= 'color: red'> Reprovado </b> <br><br>`
        }
        document.write(resultado)
}

