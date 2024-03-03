

function calcularSueldo(horasTrab, sueldoHoras){
    alert("Tu sueldo es $:" +(horasTrab*sueldoHoras) );

}
    function saludar(nombre){
    
    alert("Hola Mundo desde JavaScript \nBIENVENIDO" + nombre)
    }

    function tiposVariables(){
        //es un comentario de una linea 
        /*es un comentario
        de multiples 
        lineas
        */
       //En JavaScript hay tres formas de hacer una declaración 
       //1) var: Declarar una variable y se puede redeclarar  
       var sueldo = 15000;
       var sueldo = 10000; 
       console.log("Var sueldo =" + sueldo); //para pruebas (no es correcto) verlo en una sola terminal)
       /* 2) let: Declara una variable pero no se puede redeclarar en un mismo 
       scope(bloqueo de instrucciones) */
       let nombre = "pepito";
       if(true){
        let nombre = "Maria"; //independiente
        console. log("Let nombre= " + nombre);
       }
       console. log("Let nombre= " + nombre);
       //3) const: Declara constantes en el que su valor no cambia 
       const IVA = 16; //identificar que es una constante se define en todo en mayuscula 
       const PI = 3.1416;
       
       console.log("const IVA=" + IVA);
       console.log("const PI=" + PI);


    }
    function entradaSalidaDatos(){
        //Entrada por teclado no es muy común 
        //utiliza funcion 
        let cal1 = parseInt(prompt("INGRESE CALIFICACIÓN UNO", 70)); //TECLADO POR DEFECTO
        let cal2 = parseInt(prompt("INGRESE CALIFICACIÓN DOS", 70)); //cargue valor por defecto

        let promedio =(cal1+cal2)/2;
        //SALIDA por pantalla
        alert("Tu Promedio es:"+ promedio);   //dialogo

        //  variable      funcion de entrada
        let conformidad = confirm("¿ESTAS DEACUERDO CON TU CALIFICACION DE PROMEDIO?")
        if(conformidad){  //sin true valida automaticamente
            alert("Estas de acuerdo con tu calificación, EXITO");
         } else{
            alert("¡Esfuerzate un poco más!, TU PUEDES");
        }

        
    }

    



