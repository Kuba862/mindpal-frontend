import { fetchAllNotes } from './search.js';
import { addNewNoteUtil, cancelNewNoteUtil } from './utils.js';
import { addNewNote } from './notes.js';

document.getElementById('add-new-note-btn').addEventListener('click', addNewNoteUtil);
document.getElementById('cancel-new-note').addEventListener('click', cancelNewNoteUtil);
document.getElementById('save-new-note').addEventListener('click', addNewNote)
// document.addEventListener('DOMContentLoaded', async () => {
//     const notes = await fetchAllNotes();
//     console.log(notes);
// });



// w pierwszym uruchomieniu pobierz dane z endpointu http://localhost:5001/api/all-notes

// fetchAllNotes();
