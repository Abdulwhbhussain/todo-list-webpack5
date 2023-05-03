import './style.css';

const todoArray = [
  {
    description: 'Get out of bed',
    completed: false,
    index: 0,
  },
  {
    description: 'Brush teeth',
    completed: false,
    index: 1,
  },
];

todoArray.forEach((todo) => {
  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${todo.index}`);
  todoListCheck.classList.add('todo-element-padding');
  document.getElementById('todo-list-element').appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('todo-element-padding');
  todoListElement.innerText = todo.description;

  document.getElementById('todo-list-element').appendChild(todoListElement);
  const threeDotIcon = document.createElement('span');
  threeDotIcon.innerHTML = '&#8942;';
  document.getElementById('todo-list-element').appendChild(threeDotIcon);

  document
    .getElementById('todo-list-element')
    .appendChild(document.createElement('hr'));
});
