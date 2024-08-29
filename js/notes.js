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
    document.getElementById('new-note-creator').classList.add('hidden');
  }
  return data;
};
