import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react'

import './App.css'
import NotesForm from './components/NotesForm';
import Filter from './components/Filter';
import Note from './components/Note';

function App() {
  const [listNotes, setlistNotes] = useState([]);
  const [filter, setFilter] = useState('');

  const listFiltered = !filter ? listNotes : listNotes.filter(note => note.priority === filter);


  return (
    <>
      <div className='card text-white bg-dark mb-3' style={{ width: '30rem' }}>
        <div className='card-header'>
          <h1>Notes: </h1>
          <NotesForm listNotes={listNotes} setlistNotes={setlistNotes} />
        </div>
        <div className="card-body">
          <Filter setFilter={setFilter} filter={filter} />
          <hr style={{ color: 'white' }} />
          {listFiltered.map((note, index) => <Note note={note.note} priority={note.priority} listNotes={listNotes} setlistNotes={setlistNotes} index={index} />)}
        </div>

      </div>
    </>
  )
}

export default App
