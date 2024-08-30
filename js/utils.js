import { fetchAllNotes } from './notes.js';

const main = document.getElementById('main-container');
const newNoteSection = document.getElementById('new-note-creator');
const hiddenClass = 'hidden';
const addNewTopButton = document.getElementById('add-new-note');

export const addNewNoteUtil = () => {
  newNoteSection.classList.remove(hiddenClass);
  main.classList.add(hiddenClass);
  addNewTopButton.classList.add(hiddenClass);
};

export const cancelNewNoteUtil = () => {
  newNoteSection.classList.add(hiddenClass);
  main.classList.remove(hiddenClass);
  const notes = fetchAllNotes();
  if (!notes) {
    main.classList.add(hiddenClass);
  }
};

export const editSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 12.1042L15.3958 10.625L16 10.0208C16.1111 9.90972 16.2569 9.85417 16.4375 9.85417C16.6181 9.85417 16.7639 9.90972 16.875 10.0208L17.4792 10.625C17.5903 10.7361 17.6458 10.8819 17.6458 11.0625C17.6458 11.2431 17.5903 11.3889 17.4792 11.5L16.875 12.1042ZM10 17.5V16.0208L14.5 11.5208L15.9792 13L11.4792 17.5H10ZM2.5 13.125V11.875H8.75V13.125H2.5ZM2.5 9.6875V8.4375H12.2917V9.6875H2.5ZM2.5 6.25V5H12.2917V6.25H2.5Z" fill="#3B3C3E"/>
</svg>`;

const deleteSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 16.25H13.75V6.25H6.25V16.25ZM4.375 4.58333V3.33333H7.16667L8 2.5H12L12.8333 3.33333H15.625V4.58333H4.375ZM6.25 17.5C5.91667 17.5 5.625 17.375 5.375 17.125C5.125 16.875 5 16.5833 5 16.25V5H15V16.25C15 16.5833 14.875 16.875 14.625 17.125C14.375 17.375 14.0833 17.5 13.75 17.5H6.25ZM6.25 16.25H13.75H6.25Z" fill="#3B3C3E"/>
</svg>`;

// dynamic note creation - reason why I use DOMContentLoaded in app.js
export const showNotes = (notes) => {
  const notesContainer = document.getElementById('notes-list');
  notesContainer.innerHTML = '';

  notes.map((note) => {
      const noteElement = document.createElement('li');
      noteElement.classList.add('note-from-db');
      noteElement.dataset.key = note._id;
      noteElement.setAttribute('draggable', 'true');
      const titleContainer = document.createElement('div');
      titleContainer.classList.add('title-container');

      const titleElement = document.createElement('p');
      titleElement.classList.add('note-title');
      titleElement.textContent = note.title;

      const iconsContainer = document.createElement('div');
      iconsContainer.classList.add('note-icons');

      const editElement = document.createElement('div');
      editElement.classList.add('edit-note');
      editElement.innerHTML = editSVG;

      const deleteElement = document.createElement('div');
      deleteElement.classList.add('delete-note');
      deleteElement.innerHTML = deleteSVG;

      iconsContainer.appendChild(editElement);
      iconsContainer.appendChild(deleteElement);

      titleContainer.appendChild(titleElement);
      titleContainer.appendChild(iconsContainer);

      const contentElement = document.createElement('p');
      contentElement.classList.add('note-content');
      contentElement.textContent = note.content;

      const dateElement = document.createElement('p');
      dateElement.classList.add('note-date');
      const date = new Date(note.date);
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
      });
      dateElement.textContent = formattedDate;

      noteElement.appendChild(titleContainer);
      noteElement.appendChild(contentElement);
      noteElement.appendChild(dateElement);

      notesContainer.appendChild(noteElement);

      return noteElement;
    })
    .forEach((noteElement) => notesContainer.appendChild(noteElement));
};

// dynamic delete popup creation - reason why I use DOMContentLoaded in app.js
export const showDeletePopup = () => {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('delete-popup-container');

  const popupTitle = document.createElement('h2');
  popupTitle.classList.add('delete-popup-title');
  popupTitle.textContent = 'Delete Note';

  const popupContent = document.createElement('p');
  popupContent.classList.add('delete-popup-content');
  popupContent.textContent = 'Are you sure you want to delete this note?';

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-delete');
  cancelButton.addEventListener('click', () => {
    popupDiv.remove();
  });
  cancelButton.textContent = 'Cancel';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('confirm-delete');
  deleteButton.id = 'confirm-delete';
  deleteButton.textContent = 'Delete';

  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupContent);
  popupContainer.appendChild(cancelButton);
  popupContainer.appendChild(deleteButton);

  const popupDiv = document.createElement('div');
  popupDiv.classList.add('popup');
  popupDiv.appendChild(popupContainer);

  const popupButtons = document.createElement('div');
  popupButtons.classList.add('popup-buttons');
  popupButtons.appendChild(cancelButton);
  popupButtons.appendChild(deleteButton);

  popupContainer.appendChild(popupButtons);

  document.body.appendChild(popupDiv);

  document.body.appendChild(popupDiv);
};
