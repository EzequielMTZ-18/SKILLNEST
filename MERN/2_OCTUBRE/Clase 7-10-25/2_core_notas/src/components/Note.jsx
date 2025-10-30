import styles from "./../css/Note.module.css"

const Note = ({ note, priority, listNotes, setlistNotes, index }) => {

    const deleteNote = () => {
        setlistNotes(listNotes.filter((n, i) => i !== index));

    }



    return (
        <div className={`border bg-light ${styles.note} `}>
            <p className="mb-0">
                {note} - <span className={priority === "High" ? styles.high : priority === "Low" ? styles.low : styles.medium}>{priority}</span>
            </p>
            <button className={`btn btn-danger ${styles.boton}`} onClick={deleteNote}>
                Delete
            </button>
        </div>
    );
}


export default Note;