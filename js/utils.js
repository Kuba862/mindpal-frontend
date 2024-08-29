const main = document.getElementById('main-container');
const newNoteSection = document.getElementById('new-note-creator');
const hiddenClass = 'hidden';

export const addNewNoteUtil = () => {
    newNoteSection.classList.remove(hiddenClass);
    main.classList.add(hiddenClass);
}

export const cancelNewNoteUtil = () => {
    newNoteSection.classList.add(hiddenClass);
    main.classList.remove(hiddenClass);
}
