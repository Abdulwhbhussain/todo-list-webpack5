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

let todoArray = [
  { description: 'Ali ka Baap', completed: false, index: 1 },
  { description: 'Abu ka Baap', completed: false, index: 2 },
  { description: 'Baap ka Baap', completed: false, index: 3 },
  { description: 'Mama ka Baap', completed: false, index: 4 },
  { description: 'Chacha ka Baap', completed: false, index: 5 },
  { description: 'Taya ka Baap', completed: false, index: 6 },
];

if (!localStorage.getItem('todoList')) {
  localStorage.setItem('todoList', JSON.stringify(todoArray));
} else {
  todoArray = JSON.parse(localStorage.getItem('todoList'));
}
console.log(todoArray);
renderOnLoad(todoArray);

document.getElementById('todo-enter').addEventListener('click', () => {
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
