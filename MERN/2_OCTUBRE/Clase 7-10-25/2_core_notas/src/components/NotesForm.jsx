import { useState } from 'react';

import styles from './../css/NotesForm.module.css';


const NotesForm = ({ listNotes, setlistNotes }) => {
    const [note, setNote] = useState('');
    const [priority, setPriority] = useState('Low');
    const [error, setError] = useState({ note: '', priority: '' });


    const addNote = (e) => {
        e.preventDefault();
        const errorCopy = { ...error };
        !note ? errorCopy.note = "Empty input" : errorCopy.note = '';
        !priority ? errorCopy.priority = "Select a priority" : errorCopy.priority = '';

        if (!note || !priority) {
            setError(errorCopy);
            return;

        }


        setlistNotes([...listNotes, { note, priority }]);
        setNote('');
        setPriority('Low');
        setError({ note: '', priority: '' });
    }

    return (
        <div>
            <form className={styles.cardNotes} onSubmit={(e) => addNote(e)}>
                <div>
                    <input type="text" placeholder='Write your note' className={`input-group-text ${styles.noteInput}`} id='note' name="note" value={note} onChange={(e) => setNote(e.target.value)} />
                    {error.note && <p style={{ color: "red" }}>{error.note}</p>}
                </div>
                <div>
                    <select name="priority" id="priority" className={`form-select ${styles.notePriority}`} value={priority} onChange={(e) => setPriority(e.target.value)} >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>

                    </select>
                    {error.priority && <p style={{ color: "red" }}>{error.priority}</p>}
                </div>
                <div>
                    <button type='submit' className={`btn btn-primary ${styles.addBtn}`}>Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default NotesForm;