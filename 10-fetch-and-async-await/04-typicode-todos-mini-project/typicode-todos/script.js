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
//https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos?_limit=10

//#####################################
//outputting it to the console
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// getTodos();

//#####################################
//displaying the items at the DOM
//
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();

//
//#####################################
// to cater the completed activity by adding the class done
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//#####################################
// putting attributes for each task (ID)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         div.setAttribute('data-id', todo.id);

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//

//#####################################
//addTodoToDOM
//we can reuse the function (DRY)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// getTodos();

//
//#####################################
//createToDo
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();
//   console.log(e.target.firstElementChild.value);
//   const newTodo = { title: e.target.firstElementChild.value, completed: false };

//   fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
//   console.log(e.target.firstElementChild.value);
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodos);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
// };

// init();
//
//#####################################
//
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.classList.add('todo');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();
//   //   console.log(e.target.firstElementChild.value);
//   const newTodo = { title: e.target.firstElementChild.value, completed: false };

//   fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
//   //   console.log(e.target.firstElementChild.value);
// };

// const toggleCompleted = (e) => {
//   if (e.target.classList.contains('todo')) {
//     e.target.classList.toggle('done');
//     // console.log(e.target.dataset.id);
//     updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
//   }
// };

// const updateTodo = (id, completed) => {
//   fetch(`${apiUrl}/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ completed }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// const deleteTodo = (e) => {
//   if (e.target.classList.contains('todo')) {
//     // console.log('delete');
//     const id = e.target.dataset.id;

//     fetch(`${apiUrl}/${id}`, {
//       method: 'DELETE',
//     })
//       .then((res) => res.json())
//       .then(() => e.target.remove());
//   }
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodos);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
//   document
//     .querySelector('#todo-list')
//     .addEventListener('click', toggleCompleted);
//   document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
// };

// init();
//
//#####################################
//#####################################
//#####################################
