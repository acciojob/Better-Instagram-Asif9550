//your code here
const parent = document.getElementById('parent');
let draggedElement = null;

// Add drag and drop event listeners to all draggable elements
parent.addEventListener('dragstart', (e) => {
  draggedElement = e.target; // Store the dragged element
  e.target.classList.add('selected'); // Highlight the dragged element
});

parent.addEventListener('dragend', (e) => {
  e.target.classList.remove('selected'); // Remove the highlight when dragging ends
});

parent.addEventListener('dragover', (e) => {
  e.preventDefault(); // Allow drop by preventing the default behavior
});

parent.addEventListener('drop', (e) => {
  e.preventDefault();
  const targetElement = e.target;

  // Ensure the drop is onto a valid image div
  if (targetElement !== draggedElement && targetElement.classList.contains('image')) {
    // Swap the innerHTML of the dragged and target elements
    const draggedHTML = draggedElement.innerHTML;
    draggedElement.innerHTML = targetElement.innerHTML;
    targetElement.innerHTML = draggedHTML;
  }
});
