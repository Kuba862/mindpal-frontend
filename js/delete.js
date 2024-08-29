export const deleteNote = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5001/api/notes/delete-note?id=${id}`,
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
      window.location.reload();
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('An error occurred while deleting the note:', error);
  }
};
