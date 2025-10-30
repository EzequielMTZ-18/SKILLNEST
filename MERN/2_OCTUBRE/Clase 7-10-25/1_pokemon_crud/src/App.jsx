import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import AddPokemonForm from './components/addPokemonForm';
import { useState } from 'react';
import FiltrarPokemon from './components/FiltrarPokemon';

function App() {

  const pokemons = [
    { name: 'Pikachu', type: 'Electric' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' },
    { name: 'Bulbasaur', type: 'Grass' }
  ]

  const [listaPokemon, setListaPokemon] = useState(pokemons);

  const [filter, setFilter] = useState('');

  const eliminarPokemon = (indexImput) => {
    const nuevaLista = listaPokemon.filter((pokemon, index) => index !== indexImput);
    setListaPokemon(nuevaLista);
  }

  const PokeListaFiltrada = filter == "All" || filter == "" ? listaPokemon : listaPokemon.filter(pokemon => pokemon.type === filter);


  //Lo hicimos sin componente Pokemon para que alcanze el tiempo de la clase
  return (
    <>
      <h1>PoKemon DB</h1>
      <div>
        <h3>
          Total Pokemons: {listaPokemon.length}
        </h3>
        <FiltrarPokemon filter={filter} setFilter={setFilter} />
      </div>
      <div className='pokemones'>
        {PokeListaFiltrada.map((pokemon, index) => (
          <div className='card' key={index}>
            <div className='card-header'>
              <h2>{pokemon.name}</h2>
            </div>
            <div className='card-body'>
              <p>Type: {pokemon.type}</p>
              <button className='btn btn-danger' onClick={() => eliminarPokemon(index)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <AddPokemonForm listaPokemon={listaPokemon} setListaPokemon={setListaPokemon} />
      <div>

      </div>
    </>
  )
}

export default App
