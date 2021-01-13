/*
class materia{
    constructor(clase,profesor, alumnos, lista){
        this.clase = clase;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.listaAlum = lista;//alumnos.join(`<br>`);
        this.Dentro = this.alumnos.includes("cofla");
    }
    comprobar(){
        if(this.Dentro == true){
            document.write("Todo fresh");
        }else{
            document.write("No esta falsoooo");}
    }
    imprimirClase(){
        document.write(
            `La materia ${this.clase} con el profesor ${this.profesor} estan los alumnos:
            <br>
            ${document.write(this.listaAlum)}
            <br>
            `)
    }

    ClasesCofla(){
        //let Dentro = this.alumnos.include("cofla");
        if(this.Dentro == true){
            this.imprimirClase();
        }
    }
    NADA(){
    }   -
}
const matematicas = new materia ("matematicas",'Jorge',['Kevin','Maria','cofla']);
matematicas.ClasesCofla();
document.write("XD");
*/

let materias = {
    matematicas : ["Profe Jorgue", "Kevin" , "Danik", "Maria", "Cofla","Daniel"],
    fisica : ["Profe Crack", "Kevin" , "Danik", "Cofla", "Esteban","Daniel"],
    lenguaje : ["Profe Alfonso", "Kevin" , "Mario", "Cofla", "Daniel"],
    programacion : ["Profe Alfonso", "Daniel" , "Mario","Nina" ],
    programacion1 : ["Profe Alfonso", "Daniel" , "Cofla","Nina" ],
    biologia : ["Profe Alfonso", "Daniel" , "Mario","Nina", "Cofla"]
    }

const InfoMateria = (materia) =>{
    let CopiaClase = materias[materia]
    let Clase = CopiaClase;

    let Profesor = Clase.shift();
    let alumnos = Clase;

    document.write(`El profesor de ${materia} es: ${Profesor} <br>
                    Los alumnos son: <b style="color:blueviolet">${alumnos}</b><br><br>`);
    //document.write(materias[materia] + `<br>`);                
    materias[materia].unshift(Profesor);
    //document.write(materias[materia].length);    
            
}

let clasesCofla = (estudiante) =>{
    let ContadorClasesCofla = 0;
    let nombreClasesCofla = [];
    let nombreProfesorCofla = [];

    for (const nombre in materias) {
        
        let lista = materias[nombre];
        if (lista.includes(estudiante) == true){
            ContadorClasesCofla++;
            nombreClasesCofla.push(nombre);
            nombreProfesorCofla.push(materias[nombre][0]);
        }   
         //document.write(nombre + `<br>`)   
    }
    

    document.write(`${estudiante}esta en : ${ContadorClasesCofla} clases` + `<br>`
                    )
    for (let i = 0; i < nombreClasesCofla.length; i++){
        document.write(`Con profesor: ${nombreProfesorCofla[i]} en ${nombreClasesCofla[i]}<br>`);
    }
            
            
                    //for (i = 1; i < materias[nombre].length; i++) {
            // = array[index];
          // if (materias[nombre][i] == "Cofla")       
        //}
}





InfoMateria("matematicas");
InfoMateria("lenguaje");
InfoMateria("fisica");
InfoMateria("programacion");
InfoMateria("biologia");


clasesCofla("Daniel");
clasesCofla("Cofla");