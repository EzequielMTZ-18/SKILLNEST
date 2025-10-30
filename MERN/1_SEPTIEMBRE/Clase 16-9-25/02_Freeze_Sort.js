
// 1) Object.freeze()

const superHero = {
    name: "Flash",
    velocity: 100
}

Object.freeze(superHero); // Congela el objeto, no permite agregar, eliminar o modificar propiedades

superHero.name = "Batman"; // No tiene efecto


//2) Array.freeze()

const marcaCarros = ['Toyota', 'Mazda', 'Honda'];
Object.freeze(marcaCarros); // Congela el array, no permite agregar, eliminar o modificar elementos

marcaCarros.push('Ford'); // No tiene efecto


// 3) Como operar los elementos inmutables

const autos = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020, combustible: 'Gasolina' },
    { id: 2, marca: 'Mazda', modelo: 'CX-5', año: 2021, combustible: 'Diesel' },
    { id: 3, marca: 'Honda', modelo: 'Civic', año: 2019, combustible: 'Gasolina' },
    { id: 4, marca: 'Ford', modelo: 'Focus', año: 2018, combustible: 'Gasolina' },
    { id: 5, marca: 'Chevrolet', modelo: 'Malibu', año: 2022, combustible: 'Hibrido' },
];
Object.freeze(autos); // Congela el array de objetos

// Ejemplo 1: copiar el array sin modificar el array original
let copiaAutos1 = [...autos];//los tres puntitos es el operador spread


// Ejemplo 2: copiar el array y agregar un nuevo objeto al array copia
let copiaAutos2 = [...autos, { id: 6, marca: 'Nissan', modelo: 'Altima', año: 2021, combustible: 'Gasolina' }];
//let copiaAutos2 = autos.concat({ id: 6, marca: 'Nissan', modelo: 'Altima', año: 2021, combustible: 'Gasolina' });


// Ejemplo 3: copiar el array usando slice el cual indica a partir de que indice copiar
let copiaAutos3 = autos.slice(1); //copia desde el indice 1 hasta el final
console.log(copiaAutos3);



////////////////////////FUNCIONES DE ORDENAMIENTO

const equiposFutbol = [
    'Valencia',
    'Real Madrid',
    'Barcelona',
    'Sevilla',
    'Atletico Madrid'
];

const equiposFutbolOrdenado = equiposFutbol.sort();
console.log(equiposFutbolOrdenado); // Ordena alfabeticamente por nombre


const numeros = [5, 3, 8, 1, 2];
const numerosOrdenados = numeros.sort((a, b) => a - b); // Ordena de menor a mayor
// const numerosOrdenados = numeros.sort((a,b) => b - a); // Ordena de mayor a menor
console.log(numerosOrdenados);



let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Maria', edad: 28 }
]
Object.freeze(personas);

const personasOrdenadas = [...personas].sort((a, b) => a.edad - b.edad); // Ordena por edad de menor a mayor
console.log(personasOrdenadas);

const ordenarPorNombre = [...personas].sort((a, b) => a.name.localeCompare(b.name)); // Ordena por nombre alfabeticamente
console.log(ordenarPorNombre);