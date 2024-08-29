export const addNewNote = async () => {
  const title = document.getElementById('new-note-title').value;
  const content = document.getElementById('new-note-content').value;
  const response = await fetch('http://localhost:5001/api/notes/add-note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  if (response.status === 200) {
    window.location.reload();
    document.getElementById('new-note-creator').classList.add('hidden');
  }
  return data;
};

export const updateNote = async (id, title, content) => {
  try {
    const response = await fetch('http://localhost:5001/api/notes/edit-note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, title, content }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if(response.status === 200) {
      window.location.reload();
    }
  } catch (error) {
    console.error('An error occurred while updating the note:', error);
  }
};
