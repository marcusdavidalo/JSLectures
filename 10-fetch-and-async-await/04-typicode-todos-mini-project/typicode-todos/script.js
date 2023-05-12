const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('title');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const title = todoInput.value.trim();
  if (title === '') {
    return;
  }
  // Disable the submit button to prevent multiple submissions
  todoForm.querySelector('button[type="submit"]').disabled = true;
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const todoEl = document.createElement('div');
      todoEl.innerText = json.title;
      todoList.appendChild(todoEl);
      todoInput.value = '';
      // Re-enable the submit button
      todoForm.querySelector('button[type="submit"]').disabled = false;
    });
}
// Adds done class to the todo item
todoList.addEventListener('click', (e) => {
  if (e.target !== todoList) {
    if (e.target.classList.contains('done')) {
      e.target.classList.toggle('done');
    } else {
      e.target.classList.add('done');
    }
  }
});

// Removes the todo item
todoList.addEventListener('dblclick', (e) => {
  // even if its not done it should delete the todo
  if (e.target !== todoList) {
    e.target.remove();
  }
});

// Prevents highlighting of any text
todoList.addEventListener('mousedown', (e) => {
  e.preventDefault();
});
