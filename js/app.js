import { fetchAllNotes } from './search.js';
import { addNewNoteUtil, cancelNewNoteUtil, showNotes, showDeletePopup } from './utils.js';
import { addNewNote } from './notes.js';
import { editNote } from './edit.js';
import { deleteNote } from './delete.js';


document.getElementById('add-new-note-btn').addEventListener('click', addNewNoteUtil);
document.getElementById('add-new-note').addEventListener('click', addNewNoteUtil);
document.getElementById('cancel-new-note').addEventListener('click', cancelNewNoteUtil);
document.getElementById('save-new-note').addEventListener('click', addNewNote);
document.addEventListener('DOMContentLoaded', async () => {
    const notes = await fetchAllNotes();
    showNotes(notes);
});
document.getElementById('notes-list').addEventListener('click', (e) => {
    if (e.target.matches('.edit-note, .edit-note *')) {
      editNote(e);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('notes-list').addEventListener('click', (e) => {
      if(e.target.matches('.delete-note, .delete-note *')) {
        showDeletePopup();
      }
    });
  });
