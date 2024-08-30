export const fetchAllNotes = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/notes/all-notes');
    const data = await response.json();

    const mainContainer = document.getElementById('main-container');
    const addNewNote = document.getElementById('add-new-note');

    if (data.length !== 0) {
      mainContainer.classList.add('hidden');
      addNewNote.classList.remove('hidden');
    }

    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const filterNotesByContent = (notes, searchQuery) => {
  const filteredNotes = notes.filter(note => {
    const noteContent = note.content.toLowerCase();
    return noteContent.includes(searchQuery.toLowerCase());
  });
  return filteredNotes;
};