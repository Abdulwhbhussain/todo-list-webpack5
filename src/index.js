import './style.css';
import renderOnLoad from './modules/renderOnLoad';
import todoAdd from './modules/add';
import todoRemove from './modules/remove';

const InputElementTodo = document.getElementById('todo-input');

if (!localStorage.getItem('input')) {
  localStorage.setItem('input', '');
} else {
  InputElementTodo.value = localStorage.getItem('input');
}

InputElementTodo.addEventListener('change', (e) => {
  localStorage.setItem('input', `${e.target.value}`);
});

let todoArray = [];

if (!localStorage.getItem('todoList')) {
  localStorage.setItem('todoList', JSON.stringify(todoArray));
} else {
  todoArray = JSON.parse(localStorage.getItem('todoList'));
}
console.log(todoArray);
renderOnLoad(todoArray);

document.getElementById('todo-enter').addEventListener('click', () => {
  if (InputElementTodo.value !== '') {
    const descriptionTodo = InputElementTodo.value;
    InputElementTodo.value = '';
    localStorage.setItem('input', InputElementTodo.value);

    todoArray.push({
      description: descriptionTodo,
      completed: false,
      index: todoArray.length === 0 ? 1 : todoArray.length + 1,
    });

    localStorage.setItem('todoList', JSON.stringify(todoArray));
    todoAdd(todoArray[todoArray.length - 1], todoArray);
  }
});

document.getElementById('todo-footer-button').addEventListener('click', () => {
  const todoListUpdate = todoRemove(todoArray);

  for (let i = 0; i < todoListUpdate.length; i += 1) {
    todoListUpdate[i].index = i + 1;
  }

  todoArray = todoListUpdate;

  localStorage.setItem('todoList', JSON.stringify(todoArray));

  document.getElementById('todo-list-element').innerHTML = '';

  renderOnLoad(todoArray);
});

// const binElements = document.querySelectorAll('.hover-bin');

// binElements.forEach((binElement) => {
//   binElement.addEventListener('click', () => {
//     todoArray.splice(binElement.parentElement.id.split('-')[3] - 1, 1);
//     todoArray.forEach((element, indx) => {
//       element.index = indx + 1;
//     });
//     localStorage.setItem('todoList', JSON.stringify(todoArray));

//     binElement.parentElement.nextElementSibling.remove();
//     binElement.parentElement.remove();
//   });
// });
