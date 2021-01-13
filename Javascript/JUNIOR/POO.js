//POO: Programacion orientada a objetos
// dDefinicio: programar objetos con propiedades y metodos
//              Es un paradigma de la programacion --> una forma de ccrear soluciones


//          Clase:  Es como una receta o plantilla 
//          Atributo: caracteristicas del objeto
//          Metodo: funcionalidades
//          Contructor: algo que se va a ejecutar al instanciar el objeto
//                     construir las propiedades del objeto
//          Instaciar

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.age = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo una edad de ${this.age} y soy de color ${this.color} <br>`;
         
    }
    verinformacion(){
        document.write(this.info)
    }
    
}

                                           //new object --> instanciar
const gato = new Animal("gato", "2", "blanco");  
const pajaro = new Animal("pajaro", "99", "verde");  

gato.verinformacion();
pajaro.verinformacion();

const Enter = ()=> {document.write(`<br>`);}
const titulo = (titular)=> {document.write(`<h2> ${titular} </h2>`+`<br>`)};
//------------------------------------------------------------
//ABSTRACCION:  
//             Reducir o hacer mas simple el objeto  |  resumir todo el objeto en partes simple
//MODULARIDAD
//              Separar todo en partes para resulver el problema de programacion
//ENCAPSULAMINETO
//              Encapsular o Todos los datos estan en privado| el usuario no los puede acceder
//POLIMORFISMOS
//              Capacidad que tiene un objeto para comportarse distinto en su metodo por sus propiedades.
Enter();



// HERENCIA --------------------
//          Tomar todo las propiedades y metodos de otra clase y ponerlas en otra clase para añadir mas prop..
titulo('----HERENCIA------');

class Perro extends Animal {
    constructor(especie,edad,color,raza){
    super(especie,edad,color)
    this.raza = null;
    }
    verinformacion(){
        document.write(this.info + `Mi raza es:${this.raza} <br>`)
    }
    //metodo 
    ladrar(){
        document.write("ladra: WAW");
    }
    static ladrarStatic(){
        document.write("ladra STATIC: WAW");
    }
    //set
    set setRaza (newName){ //Es un metodo pero actua como propiedad... para cambiar la paropierdad: variable.propiedad = "cambia propiedad";
        this.raza = (newName);
    }
    //get -> sirve para obtener informacion
    get getRaza(){
        return this.raza;
    }
}


const perro = new Perro("perro", "5", "negro", "Golden");
perro.verinformacion();
perro.ladrar();



//METODOS ESTATICOS
titulo("Static");
//estaticos.ladrarStatic();

//Cambiar propiedades
titulo("Set");
document.write(`cambio la raza como propiedad<br>`)
perro.serRaza = "Frensh";
perro.verinformacion();





