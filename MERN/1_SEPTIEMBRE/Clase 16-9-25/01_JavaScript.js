const avengers = [
    { nombre: "Spider-Man", edad: 17 },
    { nombre: "Iron Man", edad: 40 },
    { nombre: "Black Widow", edad: 28 },
    { nombre: "Shuri", edad: 16 },
];


//FUNCIONES FLECHA

//metodo largo
const mayoresDeEdad = (arr) => {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edad >= 18) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

console.log(mayoresDeEdad(avengers));

//metodo con filter 
const mayoresDeEdadFilter = (arr) => arr.filter(avenger => avenger.edad >= 18);

console.log(mayoresDeEdadFilter(avengers));


//OPERADOR TERNARIO

let edad = 20;

console.log(
    edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
);

let temperatura = 30;

let estado = temperatura > 25 ? "Hace calor" : "Hace frio";
console.log(estado);


//OPERADOR TERNARIO ANIDADO
let notaExamen = 85;

let resultadoExamen = notaExamen >= 90 ? "A" :
    notaExamen >= 80 ? "B" :
        notaExamen >= 70 ? "C" :
            notaExamen >= 60 ? "D" : "F";

console.log(`Tu calificación es: ${resultadoExamen}`);


//CALLBACKS

function afuera(fn) {
    console.log("Funcion de afuera empezo");
    fn();
    console.log("Funcion de afuera termino");
}

function adentro() {
    console.log("Funcion de adentro ejecutada : Callback");
}


afuera(adentro);

//lo mismo pero con flecha
const afuera2 = (fn) => {
    console.log("Funcion de afuera 2 empezo");
    fn();
    console.log("Funcion de afuera 2 termino");
}

const adentro2 = () => {
    console.log("Funcion de adentro 2 ejecutada : Callback");
}

afuera2(adentro2);
//afuera2(adentro2());//no se debe hacer asi 


const calculadora = (num1, num2, fn) => { //fn = funcion de entrada
    let resultado = fn(num1, num2);
    return resultado;
}

const sumax = (a, b) => a + b;
const restax = (a, b) => a - b;
const multiplicacionx = (a, b) => a * b;
const divisionx = (a, b) => a / b;

console.log(calculadora(10, 5, sumax));
console.log(calculadora(10, 5, restax));
console.log(calculadora(10, 5, multiplicacionx));
console.log(calculadora(10, 5, divisionx));



//METODO MAP ARRAYS

let precioUSD = [10, 20, 30, 40, 50];
let precioARS = precioUSD.map(precio => precio * 10);
console.log(precioARS);


const convert = input => input * 10;
let precioARS2 = precioUSD.map(convert);
console.log(precioARS2);


//METODO FILTER ARRAYS
let edades = [10, 15, 20, 25, 30, 35, 17, 45, 50];
let mayores = edades.filter(edad => edad >= 18); //importante ponerlo en
//--------------------una variable nueva para que se guarde el resultado
console.log(mayores);



//METODO FOREACH ARRAYS
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((valor, i) => {
    numeros[i] = valor * 2; //modifica el array original
});

console.log(numeros);

//METODO FIND ARRAYS
let productos = [
    { id: 1, nombre: "Mouse", precio: 100 },
    { id: 2, nombre: "Keyboard", precio: 200 },
    { id: 3, nombre: "Headset", precio: 300 },
    { id: 4, nombre: "Microphone", precio: 400 },
];

let productoBuscado = productos.find(producto => producto.id === 3);
console.log(productoBuscado);