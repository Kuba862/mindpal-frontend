export const enableDragAndDrop = () => {
    const noteElements = document.querySelectorAll('.note-from-db');
    // event handlers for the drag and drop events
    const eventHandlers = {
      'dragstart': dragStart,
      'dragover': dragOver,
      'dragleave': dragLeave,
      'drop': dragDrop,
      'dragend': dragEnd
    };
  
    noteElements.forEach((noteElement) => {
      noteElement.setAttribute('draggable', 'true');
      for (let event in eventHandlers) {
        noteElement.addEventListener(event, eventHandlers[event]);
      }
    });
  }
  
  let draggedItem = null;
  
  const dragStart = (e) => {
    e.target.classList.add('dragging');
    draggedItem = e.target;
  }
  
//   prevent the default behavior of the dragover event and append the dragged item to the container
  const dragOver = (e) => {
    e.preventDefault();
    const container = document.getElementById('notes-list');
    const afterElement = getDragAfterElement(container, e.clientY);
    // append the dragged item to the container based on the position of the dragged item
    if (afterElement == null) {
      container.appendChild(draggedItem);
    //   append the dragged item after the element that is closest to the dragged item
    } else {
      container.insertBefore(draggedItem, afterElement);
    }
  }
  
//   remove the dragging class from the dragged item
  const dragLeave = (e) => {
    e.target.classList.remove('dragging');
  }
  
//   prevent the default behavior of the drop event
  const dragDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove('dragging');
  }
  
//   remove the dragging class from the dragged item
  const dragEnd = (e) => {
    e.target.classList.remove('dragging');
    draggedItem = null;
  }
  
//   get the element that is closest to the dragged item
  const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.note-from-db:not(.dragging)')];
  
    // return the element that is closest to the dragged item
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }