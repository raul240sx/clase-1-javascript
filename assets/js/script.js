console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

//variables en js, puede ser cualquiera var o let tanto para numeros como letras

let edad = 30;
let edad2 = 25;
var nombre = "raul";
const rut = 454686565;   //const no se puede reasignar o cambiar porque es constante

console.log(rut)      // console.log es imprimir en la consola del navegador


// tipos de datos
let texto = "este es un texto";
let numero = 2;
let esEstudiante = true;  //sentencia true o false booleano
let nulo = null;             // nulo, no tiene nada
let indefinido;             // no se le ha asignado dato, está inicializada la variable pero no tiene nada
let numeroGrande = 4564874874231548;


//operadores

let suma = 10 + 5
let resta = 10 - 5
let multiplicacion = 10 * 5
let division = 10 / 5
let modulo = 10 % 5

// Estructuras de control
//if else


// ejemplo
let nota = 60
if (nota >= 90) {       //si se cumple lo indicado, se ejecuta lo que está dentro de los corchetes
    console.log("muy buena nota")
}
else if (nota >=50) {
    console.log("nota normal")
}
else {
    console.log("reprobado")
}

// Bucles

//argumentos del for: el indice donde inicia el for y puede tener cualquier nombre aparte de "i" ; condicion para parar el bucle; en cuanto aumenta el indice)
for (let i = 0; i < 10; i++ ) {    // luego en los corchetes se ejecuta lo deseado
    console.log("i =", i)
}   


// Manipulacion del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p>hola desde js</p>"

const div1 = document.getElementById("div1")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {         // para escuchar el evento del boton
    div1.style.backgroundColor = "red"

})   