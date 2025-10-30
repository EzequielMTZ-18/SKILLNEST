//Ejercicio Core Nº2


//Ejercicio 1: Conversor de temperatura
//Crea una función flecha que convierta temperaturas de grados Celsius a 
// Fahrenheit. La fórmula para convertir Celsius a Fahrenheit es: 
// Fahreneit = (Celsius * 9 / 5) + 32

const conversorFahrenheit = celcius => (celcius * 9 / 5) + 32;
console.log(conversorFahrenheit(50)); //Salida: 122




//Ejercicio 2: Generador de mensajes personalizados
//Implementa una función flecha que tome un nombre y una edad como argumentos 
//y devuelva un mensaje en formato de cadena, por ejemplo:

//"Hola Juan, tienes 30 años de edad."


const generadorMensajes = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;
//la funcion flecha devuelve automaticamente el resultado de la expresion, hace un return
// si es una sola linea
console.log(generadorMensajes("Kevin", 28)); //Salida: "Hola Kevin, tienes 28 años de edad."


//Ejercicio 3: Convertir de millas a kilómetros
//Crea una función flecha que convierta millas a kilómetros. 
// Considera que: 1 milla = 1.60934 km


const conversorMillas = millas => millas * 1.60934;
const conversorMillas2 = millas => `${millas * 1.60934}km`; //otra forma de hacerlo
console.log(conversorMillas(10)); //Salida: 16.0934;
console.log(conversorMillas2(10)); //Salida: 16.0934km


//Ejercicio 4: Consejos según el clima

//Crea una función flecha que, según el clima ingresado como argumento, 
// retorne un consejo adecuado. Por ejemplo:

//Si el clima es “lluvioso”, debe sugerir llevar un paraguas.
//Si el clima es “soleado”, debe sugerir llevar un sombrero.
//Utiliza el operador ternario para simplificar la evaluación condicional en este ejercicio.

const climaAdvisor = clima => clima === "lluvioso" ? "Lleva un paraguas" : "Lleva un sombrero";
console.log(climaAdvisor("lluvioso"));



const climaAdvisor2 = clima => clima === "lluvioso" ? "Lleva un paraguas" : clima === "soleado" ? "Lleva un sombrero" : "No idea";
console.log(climaAdvisor2("lluvioso"));