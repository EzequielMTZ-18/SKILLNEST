
const FiltrarPokemon = (props) => {

    const filtrarLista = (e) => {
        e.preventDefault();
        console.log(props.filter);
    }

    return (
        <form>
            <div>
                <label htmlFor="type">Filter by type: </label>
                <select name="type" id="type" value={props.filter} onChange={(e) => props.setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Electric">Electric</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Grass">Grass</option>
                </select>
            </div>
        </form>
    )
}


export default FiltrarPokemon;