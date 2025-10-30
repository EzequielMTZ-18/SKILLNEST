
//functionNoExistente();//Esto tirara un error


try {
    functionNoExistente();
} catch (error) {
    //Los tres componentes principales de un error son
    //console.log(error.name); //Tipo de error
    //console.log(error.message); //Mensaje de error
    console.log(error.stack); //Donde se produjo el error, info completa
}

console.log("Terminado");


//Manejar un error personalizado
const dividir = (a, b) => {
    try {
        if (b === 0) throw "No se puede dividir por cero";
    } catch (error) {
        return `Error: ${error}`;
    }
    return a / b;
}

console.log(dividir(4, 0));


