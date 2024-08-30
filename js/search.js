export const filterNotesByContent = (notes, searchQuery) => {
  const filteredNotes = notes.filter(note => {
    const noteContent = note.content.toLowerCase();
    return noteContent.includes(searchQuery.toLowerCase());
  });
  return filteredNotes;
};