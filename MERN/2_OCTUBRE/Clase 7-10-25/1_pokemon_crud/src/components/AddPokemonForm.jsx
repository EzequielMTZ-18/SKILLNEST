import { useState } from "react";

const AddPokemonForm = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const [nameError, setNameError] = useState('');
    const [typeError, setTypeError] = useState('');


    const agregarPokemon = (e) => {
        e.preventDefault();
        name == "" ? setNameError("Name is required") : setNameError("");
        type == "" ? setTypeError("Type is required") : setTypeError("");
        if (name == "" || type == "") return;

        const nuevoPokemon = { name, type };
        props.setListaPokemon([...props.listaPokemon, nuevoPokemon]);
        setName('');
        setType('Electric');
    }

    return (
        <form onSubmit={(e) => agregarPokemon(e)}>
            <div>
                <label htmlFor="name">Pokemon's name: </label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </div>
            <div>
                <hr />
                <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">-- Select Type --</option>
                    <option value="Electric">Electric</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Grass">Grass</option>
                </select>
                {typeError && <p style={{ color: 'red' }}>{typeError}</p>}
                <hr />
            </div>
            <button className="btn btn-success">Add Pokemon</button>
        </form>
    )
}



export default AddPokemonForm;