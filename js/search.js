export const fetchAllNotes = async () => {
  const response = await fetch('http://localhost:5001/api/notes/all-notes');
  const data = await response.json();
  if (data.length !== 0) {
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('add-new-note').classList.remove('hidden');
  }
  return data;
};
