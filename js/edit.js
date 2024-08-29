import { editSVG } from './utils.js';
import { updateNote } from './notes.js';
 
export const editNote = (e) => {
  const noteElement = e.target.closest('.note-from-db');
  const titleElement = noteElement.querySelector('.note-title');
  const contentElement = noteElement.querySelector('.note-content');
  const editButton = noteElement.querySelector('.edit-note');

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.classList.add('new-note-title');
  titleInput.value = titleElement.textContent;
  titleElement.replaceWith(titleInput);

  const contentInput = document.createElement('textarea');
  contentInput.classList.add('new-note-content');
  contentInput.value = contentElement.textContent;
  contentElement.replaceWith(contentInput);

  editButton.innerHTML = '√';
  editButton.classList.add('save-note');

  editButton.addEventListener('click', () => {
    const newTitleElement = document.createElement('p');
    newTitleElement.classList.add('note-title');
    newTitleElement.textContent = titleInput.value;
    titleInput.replaceWith(newTitleElement);
  
    const newContentElement = document.createElement('p');
    newContentElement.classList.add('note-content');
    newContentElement.textContent = contentInput.value;
    contentInput.replaceWith(newContentElement);
  
    editButton.innerHTML = editSVG;
    updateNote(noteElement.dataset.key, titleInput.value, contentInput.value);
  });
};
