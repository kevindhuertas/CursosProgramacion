/*

DOM: document Object Model   -> intefas o documento o donde esta todo html, css, js

Nodo - En el Dom es cualquier etiqueta del cuerpo <>  (<p> es una etiqueta y un nodo es mas bien todo el proseco que engloba )
        *Document: nodo raiz ,  de donde derivan todo
        *Element: nodo definido por etiquetas html
        *text: noto texto dentro de un nodo elemento (considerado como hojode de tipo texto)  <h1>TITULO</h1>
        *Atribute: los atributos de las etiaueas definen nodos(en JS se los vera como informacion asociada a un nodo element)
        *Comentarios y otros tambien son nodos
        

Document - Metodos de seleccion de elementos
    document. 

    \\\\\\\

            getElementById() 0 sellecciona elemento por Id
            getElementByTagName() - Seleccionar todos los eleemntos por nombre de etiqueta 
            querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
                            document.querySelector(".problemas") //Para clases (para id es ("#elemento"))
            querySelectorAll() - Devuelve todods los elementosque coincidan con el grupo especificado de eslectores
                            Selecciona todos los que tengan esa clase o su ide



            setAttribute() - Modifica el valor del atributo  ("type","text")
            getAttribute() - obtiene el valor de un atributo ("atributo")
            removeAttribute() - Remueve el valor del atributo


Atributos globales  - todos los elementos de html tienen estos atributos
            contenteditable - Indica y permite que un elemento se puede editar
                                setAttribute("contenteditable", "true/false")
            dir - Indica la direccionalidad del texto
                                ltr, rtl, 
            hidden - Indica si el elemento aun no es, o ya lo es, relevante.
                                setAttribute("hidden")
            uabindex - para poder selecccionarlo con ele tab (si le ponemos "1", "2"...) sigue el orden de la seleccion tab
            title - contiene un tecto con informacion relacionada al elemto que pertenece, cuando paso el mouse encima del elemnto

Atributos de Inputs:
            classNme
            value
            type
            accept - aceptar archivos
            form
            minLength - minima cantidad que debe tener un input
            placeholder
            required  - permite que es requerido o no 
            
            ---->
            const input = document.ocument.querySelector(".input-normal")
            input.type("range")

Atributos styles (porpiedades con camelCase)
            const titulo = document.querySelector(".titulo");
                titulo.style.color = "#32b";
            
Clases y classList y Metodos de classList
                        VariableDelElemento.classList.add
            Definicion:
            add() añade una clase
            remove() - remueve una clase
            item() - devuelve la clase del indice especificado
                    elemento.classList.item(1) //devuelve nombre de clase en la posicion 1
            contains() - verifica si ese elemento posee o no (true/false), la clase especificada 
                    elemento.classList.contains("nombre de la clase") // si exite va a dar true , si no false
            replace() - reemplaza una clase por otra
                        elemento.classList.replace("grande", "chico")
            toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
                        element.classList.toggle("nombre de la clase", true) //true para que si no tiene la agrega, y si la tiene, la deja
                                                                     , false) // que siempre la saque


Obtencion y Modicicacion de elementos
            textContent - DEVUELVE EL DEXTO DE CUALQUIER NODO sin etiquetas, no importar si el texto esta oculto
                        elemento.textContent
            (Ya no se utiliza)innerText - Devuelve el texto visible de un node element
            (Ya no se utiliza)outText - devuelve el texto que se encuentra en las etiquetas html incluidas las etiquetas
            
            (estos es mejor ver en con alert())
            innerHTML - devuelve el contenido contenido html de un elemento
            outHTML - Devuelve todo el contenido html de un elemento completo

            
Creacion de Elementos
            createElements()     


            firtChile



*/



const mover = () => {
    const Rango = document.querySelector(".rangoEdad");
    Rango.setAttribute("type","range");
    valorAtributo = Rango.getAttribute("type");
    const titulo = document.querySelector(".titulo");
    titulo.style.color = "#32b";
    titulo.classList.add("granrde")
}


const AtributosInputs = ()=> { 
 /*    const input = document.querySelector(".input-normal");
    input.type("range"); */

} 

repeticion=()=>{

        const contenedor = document.querySelector(".contenedor");
        const fragmento = document.createDocumentFragment();
        
        const item = document.createElement("LI"); //siempre con mayusculas el elemento
        item.innerHTML = "Este es un item de la lista";
        
        fragmento.appendChild(item);

        console.log(fragmento)
        contenedor.appendChild(fragmento)
}

