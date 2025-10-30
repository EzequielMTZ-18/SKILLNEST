const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad); //Imprime 30
console.log(salario); //Imprime undefined


//------------------------Uso del operador spread en la fusión de objetos 
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB }; // se le asigna todo el array del objetoA y todo el array del objetoB pero hay algunos que tienen mismo nombre por lo cual se le asigna el ultimo valor ingresado
console.log(resultado); //imprime a:1, b:4, c:5, d:6


//------------------------Ámbito de variables en funciones y bloques
const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();//Imprime 4 ya que es el unico "VAR", pero da error en a y b porque solo existen dentro del bloque if

//-------------------------Propiedades de objetos inmutables

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);//Imrpime 29 ya que al aplicar freeze al objeto datos, sus propiedades NO pueden ser alteradas

//------------------------ Manipulación de arreglos sin modificar el original

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);//Imprime 1,2,3 ya que esta imprimiendo el array llamado "original"
console.log(nuevo);// Imprime 1,3,3,4 ya que se uso el array "nuevo" el cual se le asigno los datos de "original" y se le agrego el 4


//------------------------Acceso a elementos de un arreglo con destructuración

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas; //Se le asigna a "primera" el valor del indice 0 y a "segunda" el valor del indice 1
console.log(primera); //imprime Manzana
console.log(segunda);// Imprime Naranja


//------------------------Comportamiento del ámbito de let en bucles anidados 

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i); //Imprime 0,1,0,1,0,1 ya que el "let" tiene un ambito de bloque y cada "i" pertenece a su respectivo for
    }     //revisado en clase
}

//------------------------Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2]; //se le asigna todo el array de numeros1 y todo el aray de numeros2 al utilizar el spread
console.log(combinados); //imprime 1,2,3,4,5

//------------------------Alcance y captura de variables dentro de una función
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();//imprime Luis y 25 ya que para el nombre si se uso "var" el cual tiene un ambito global dentro de la funcion, pero para edad se uso "let" el cual tiene un ambito de bloque y solo existe dentro del if