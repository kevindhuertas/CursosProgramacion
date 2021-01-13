//Ejercicio 3 A

class celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, Ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.Ram = Ram;
        this.prendido = false;
    
    }

    presionarBotonEncendido(){
        if(this.prendido = false){
            this.prendido =true;
            document.write("Celular prendido!");
        }else{
            document.write("Celular apagado!!");
        }
    }

    reiniciar(){
        if(this.prendido = true){
            alert("el celular se reincio!");
        }else{ 
            alert("el celular esta apagado!");
        }
    }

    tomarFoto(){
        document.write(`Celular tomo una foto con una resolucion de ${this.resolucionCamara}!`);
    }
    grabar(){
        document.write(`Celular grabo en una resolucion de ${this.resolucionCamara}!`);
    }
    ShowInfo(){
        return `
        color: <b>${this.color}</b><br>
        peso: <b>${this.peso}</b><br>
        resolucionPantalla: <b>${this.resolucionPantalla}</b><br>
        resolucionCamara: <b>${this.resolucionCamara}</b><br>
        Ram: <b>${this.Ram}</b><br>
        `
    }
}

const celular1 = new celular("negro",'200gr','1080p','4k','2gb');
const celular2 = new celular("blanco",'500gr','1080p','1080p','1gb');
const celular3 = new celular("azul",'300gr','720p','2k','3gb');

celular1.presionarBotonEncendido();
celular1.reiniciar();
celular1.tomarFoto();


document.write(`<br><br>celular 1:<br>` + 
    celular1.ShowInfo() +  `<br>celular 2:<br>` +
    celular2.ShowInfo() +  `<br>celular 3:<br>` +
    celular3.ShowInfo() +  `<br>` 
)



//CELULARES DE ALTA GAMA
class altaGama extends celular{

    constructor(color, peso, resolucionPantalla, resolucionCamara, Ram, resolucionCamara2){
        super(color, peso, resolucionPantalla, resolucionCamara, Ram);
        this.resolucionCamara2 = resolucionCamara2;
    }

    grabarVideoLento(){
        alert("se esta grabando en camara lenta")
    }

    reconocimientFacial(){
        alert("Se te recoconocio la face")
    }
    infoAltaGama(){
        return  (this.ShowInfo() + `resolucion de Camara2 ${this.resolucionCamara2}`)
    }


}
const celularAltaGama1 = new altaGama("Naranja ",'100gr','2kp','4k','2gb','8k')
document.write(`CELULAR DE ALTA GAMA con herencia <br>` + celularAltaGama1.infoAltaGama())