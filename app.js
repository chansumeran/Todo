const textarea = document.getElementById('todo-text');

textarea.addEventListener('input', () => {
  // Reset textarea height to its natural size
  textarea.style.height = 'auto'; 

  // Calculate the optimal height based on content
  textarea.style.height = textarea.scrollHeight + 'px'; 
});
