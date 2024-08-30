import { editSVG } from './utils.js';
import { hiddenClass } from './utils.js';
import { showNotes } from './utils.js';

export const fetchAllNotes = async () => {
  const mainContainer = document.getElementById('main-container');
  const addNewNote = document.getElementById('add-new-note');

  try {
    const response = await fetch(`${
      window.location.origin.includes('.onrender.com')
        ? 'https://mindpal-backend.onrender.com'
        : 'http://localhost:5001'
    }/api/notes/all-notes`);
    const data = await response.json();

    if(data.length !== 0) {
      addNewNote.classList.remove(hiddenClass);
    } else {
      mainContainer.classList.remove(hiddenClass);
      addNewNote.classList.add(hiddenClass);
    }
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const addNewNote = async () => {
  const title = document.getElementById('new-note-title').value;
  const content = document.getElementById('new-note-content').value;
  const response = await fetch(
    `${
      window.location.origin.includes('.onrender.com')
        ? 'https://mindpal-backend.onrender.com'
        : 'http://localhost:5001'
    }/api/notes/add-note`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }
  );
  const data = await response.json();
    if (response.status === 200) {
      fetchAllNotes().then(notes => showNotes(notes));
      document.getElementById('new-note-creator').classList.add(hiddenClass);
    }
  return data;
};

export const updateNote = async (id, title, content) => {
  try {
    const response = await fetch(`${
      window.location.origin.includes('.onrender.com')
        ? 'https://mindpal-backend.onrender.com'
        : 'http://localhost:5001'
    }/api/notes/edit-note`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, title, content }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.status === 200) {
      fetchAllNotes().then(notes => showNotes(notes));
    }
  } catch (error) {
    console.error('An error occurred while updating the note:', error);
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(
      `${
        window.location.origin.includes('.onrender.com')
          ? 'https://mindpal-backend.onrender.com'
          : 'http://localhost:5001'
      }/api/notes/delete-note?id=${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.ok) {
      fetchAllNotes().then(notes => showNotes(notes));
      document.querySelector('.popup').remove();
    }
  } catch (error) {
    console.error('An error occurred while deleting the note:', error);
  }
};

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
