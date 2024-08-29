import { fetchAllNotes } from './search.js';
import { addNewNoteUtil, cancelNewNoteUtil, showNotes, showDeletePopup } from './utils.js';
import { addNewNote } from './notes.js';
import { editNote } from './edit.js';
import { deleteNote } from './delete.js';
import { enableDragAndDrop } from './dragDrop.js';

let noteToDelete = null;

document.getElementById('add-new-note-btn').addEventListener('click', addNewNoteUtil);
document.getElementById('add-new-note').addEventListener('click', addNewNoteUtil);
document.getElementById('cancel-new-note').addEventListener('click', cancelNewNoteUtil);
document.getElementById('save-new-note').addEventListener('click', addNewNote);

// fetch all notes and show them 
// add event listener to the delete button in the delete popup
document.addEventListener('DOMContentLoaded', async () => {
    const notes = await fetchAllNotes();
    showNotes(notes);
    // call enableDragAndDrop function
    enableDragAndDrop();
    // add event listener to the delete button in the delete popup
    document.addEventListener('click', (e) => {
      if (e.target.id === 'confirm-delete') {
        if (noteToDelete) {
          deleteNote(noteToDelete.dataset.key);
          noteToDelete = null;
        }
      }
    });
});
// edit note handler
document.getElementById('notes-list').addEventListener('click', (e) => {
    if (e.target.matches('.edit-note, .edit-note *')) {
      editNote(e);
    }
  });

  // delete note handler - show delete popup - event delegation
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('notes-list').addEventListener('click', (e) => {
      if(e.target.matches('.delete-note, .delete-note *')) {
        noteToDelete = e.target.closest('.note-from-db');
        showDeletePopup();
      }
    });
  });