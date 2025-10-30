// data/data.js
import { faker } from '@faker-js/faker';

//guardamos ambas funciones generadores en el mismo archivo para que compartan datos
const generarCancion = () => {
    return {
        id: faker.string.uuid(),
        titulo: faker.music.songName(),
        artista: faker.person.fullName(),
        album: faker.word.words(2),
        duracion: `${faker.number.int({ min: 2, max: 5 })}:${faker.number
            .int({ min: 0, max: 59 })
            .toString()
            .padStart(2, "0")}`,
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date
            .past({ years: 10 })
            .toISOString()
            .split("T")[0],
    };
}

const canciones = Array.from({ length: 10 }, generarCancion);

// Genera una playlist aleatoria con canciones existentes
const generarPlaylist = () => {
    const cantidad = faker.number.int({ min: 3, max: 10 });
    const cancionesRandom = faker.helpers.arrayElements(canciones, cantidad);

    return {
        idPlaylist: faker.string.uuid(),
        nombre: faker.word.words(3),
        descripcion: faker.lorem.sentence(),
        canciones: cancionesRandom,
        creador: faker.person.fullName(),
        fechaCreacion: faker.date
            .past()
            .toISOString()
            .split("T")[0],
    };
}
const playlists = Array.from({ length: 1 }, generarPlaylist);


export { canciones, playlists };