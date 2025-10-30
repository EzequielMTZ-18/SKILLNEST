

const Filter = ({ setFilter, filter }) => {
    return (
        <div>
            <select name="priority" id="priority" className={`form-select`} value={filter} onChange={(e) => setFilter(e.target.value)} >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="">All</option>
            </select>
        </div>
    );

}



export default Filter;