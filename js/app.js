import { addNewNoteUtil, cancelNewNoteUtil, showNotes, showDeletePopup } from './utils.js';
import { addNewNote, deleteNote, editNote, fetchAllNotes } from './notes.js';
import { enableDragAndDrop } from './dragDrop.js';
import { filterNotesByContent } from './search.js';

let noteToDelete = null;

document.getElementById('add-new-note-btn').addEventListener('click', addNewNoteUtil);
document.getElementById('add-new-note').addEventListener('click', addNewNoteUtil);
document.getElementById('cancel-new-note').addEventListener('click', cancelNewNoteUtil);
document.getElementById('save-new-note').addEventListener('click', addNewNote);

document.addEventListener('DOMContentLoaded', async () => {
    const notes = await fetchAllNotes();
    showNotes(notes);
    enableDragAndDrop();
    document.addEventListener('click', (e) => {
      if (e.target.id === 'confirm-delete') {
        if (noteToDelete) {
          deleteNote(noteToDelete.dataset.key);
          noteToDelete = null;
        }
      }
    });
});

document.getElementById('notes-list').addEventListener('click', (e) => {
    if (e.target.matches('.edit-note, .edit-note *')) {
      editNote(e);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('notes-list').addEventListener('click', (e) => {
      if(e.target.matches('.delete-note, .delete-note *')) {
        noteToDelete = e.target.closest('.note-from-db');
        showDeletePopup();
      }
    });

    document.getElementById('search-input').addEventListener('input', async (e) => {
      const notes = await fetchAllNotes();
      const filteredNotes = filterNotesByContent(notes, e.target.value);
      showNotes(filteredNotes);
    });
  });
