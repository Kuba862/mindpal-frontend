# Note Management - Web Application

## Description

This is a web application for managing notes. The application allows users to create, edit, delete, view, and filter notes. It also supports dynamic reordering of notes using drag-and-drop.

The application is built using modern HTML, CSS, and JavaScript or TypeScript. A significant part of the application is dynamically generated using JavaScript, hence the use of the `DOMContentLoaded` event and event delegation.

## Features

- **Create New Note**: Users can create a new note by clicking on the 'Add New Note' button. This triggers the `addNewNoteUtil` function which handles the creation of a new note.

- **Edit Existing Note**: Users can edit the content of an existing note. This is handled by the `editNote` function which is triggered when a user clicks on the 'Edit Note' button.

- **Delete Note**: Users can delete a note. The `deleteNote` function is triggered when a user confirms the deletion of a note in the delete popup.

- **View Notes**: Users can view all their notes. The `showNotes` function fetches all notes and displays them to the user.

- **Filter Notes**: Users can filter their notes using a search bar. The `fetchAllNotes` function fetches all notes and filters them based on the user's search query.

- **Drag-and-Drop**: Users can reorder their notes using drag-and-drop. The `enableDragAndDrop` function enables this functionality.

## Event Handling

The application makes extensive use of the `DOMContentLoaded` event to ensure that JavaScript code is executed only after the entire HTML document has been fully loaded. This is crucial because the application dynamically generates a significant portion of its content.

Event delegation is used to handle events on dynamically generated elements. For example, the 'Delete Note' button is added to each note dynamically. To handle the click event on these buttons, an event listener is added to the parent element and the event is delegated to the 'Delete Note' button using the `matches` method.

## Technical Requirements

The application is written in a clear and well-organized manner, using modern JavaScript standards (ES6+). It is optimized for performance, especially in the context of managing a large number of notes. The HTML code is semantic and the application is accessible to users using assistive technologies.

The code is designed to be scalable and easy to extend with new features. Attention to detail is given to performance, especially in the context of dynamically processing the list of notes.