const textarea = document.getElementById('todo-text');
const button = document.querySelector('.btnAdd');
const todo_list = document.querySelector(".todo-list");

textarea.addEventListener('input', () => {
    // Reset textarea height to its natural size
    textarea.style.height = 'auto'; 

    // Calculate the optimal height based on content
    textarea.style.height = textarea.scrollHeight + 'px'; 

    // Store the height
    localStorage.setItem('textareaHeight', textarea.style.height); 
});

window.addEventListener('load', () => {
    const storedHeight = localStorage.getItem('textareaHeight');
    if (storedHeight) {
        textarea.style.height = storedHeight;
    }
});


// add button
button.addEventListener('click', () => {
    // console.log(textarea.value)

    // add class to todo list
    todo_list.classList.add("grid")
    todo_list.classList.add("grid-cols-2")
    todo_list.classList.add("gap-20")

    const new_todo = document.createElement("p");
    new_todo.textContent = textarea.value;
    new_todo.classList.add("p-4")
    new_todo.classList.add("bg-gray-100")
    new_todo.classList.add("rounded-lg")
    new_todo.classList.add("shadow-md")
    new_todo.classList.add("w-72")
    new_todo.classList.add("min-h-64")
    new_todo.classList.add("mx-2")
    new_todo.classList.add("my-2")

    todo_list.appendChild(new_todo);
    textarea.value = ''
})