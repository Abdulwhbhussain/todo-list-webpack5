import './style.css';

const InputElementTodo = document.getElementById('todo-input');

if (!localStorage.getItem('input')) {
  localStorage.setItem('input', '');
} else {
  InputElementTodo.value = localStorage.getItem('input');
}

InputElementTodo.addEventListener('change', (e) => {
  localStorage.setItem('input', `${e.target.value}`);
});

// const todoListElement = document.getElementById('todo-list-element');

let todoArray = [];

if (!localStorage.getItem('todoList')) {
  localStorage.setItem('todoList', JSON.stringify(todoArray));
} else {
  todoArray = JSON.parse(localStorage.getItem('todoList'));
}

const todoListRender = (desc, complete, indx) => {
  const todoListItemContainer = document.createElement('div');
  todoListItemContainer.classList.add('todo-element-padding');
  todoListItemContainer.classList.add('todo-item-container');

  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${indx}`);
  todoListItemContainer.appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('ellipsis');
  todoListElement.innerText = desc;

  todoListItemContainer.appendChild(todoListElement);

  const threeDotIcon = document.createElement('span');
  threeDotIcon.innerHTML = '&#8942;';
  todoListItemContainer.appendChild(threeDotIcon);

  document
    .getElementById('todo-list-element')
    .appendChild(todoListItemContainer);

  document
    .getElementById('todo-list-element')
    .appendChild(document.createElement('hr'));

  todoListCheck.addEventListener('click', () => {
    if (todoListCheck.checked === true) {
      todoListCheck.nextElementSibling.style.textDecoration = 'line-through';
      todoListCheck.nextElementSibling.style.opacity = '0.5';

      todoArray[indx].completed = true;
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';

      todoArray[indx].completed = false;
    }
    localStorage.setItem('todoList', JSON.stringify(todoArray));
  });
};

document.getElementById('todo-enter').addEventListener('click', () => {
  const descriptionTodo = InputElementTodo.value;
  InputElementTodo.value = '';
  localStorage.setItem('input', InputElementTodo.value);
  todoArray.push({
    description: descriptionTodo,
    completed: false,
    index: todoArray.length,
  });
  localStorage.setItem('todoList', JSON.stringify(todoArray));
  todoListRender(descriptionTodo, false, todoArray.length - 1);
});

todoArray.forEach((todo) => {
  const todoListItemContainer = document.createElement('div');
  todoListItemContainer.classList.add('todo-element-padding');
  todoListItemContainer.classList.add('todo-item-container');

  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${todo.index}`);
  todoListCheck.classList.add('test-check');
  todoListItemContainer.appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('ellipsis');
  todoListElement.innerText = todo.description;

  todoListItemContainer.appendChild(todoListElement);

  const threeDotIcon = document.createElement('span');
  threeDotIcon.innerHTML = '&#8942;';
  todoListItemContainer.appendChild(threeDotIcon);

  document
    .getElementById('todo-list-element')
    .appendChild(todoListItemContainer);

  document
    .getElementById('todo-list-element')
    .appendChild(document.createElement('hr'));

  todoListCheck.addEventListener('click', () => {
    if (todoListCheck.checked === true) {
      todoListCheck.nextElementSibling.style.textDecoration = 'line-through';
      todoListCheck.nextElementSibling.style.opacity = '0.5';
      const indexOfTodoElement = todoListCheck.id.split('').pop();
      todoArray.forEach((todo) => {
        if (todo.index === Number(indexOfTodoElement)) {
          todo.completed = true;
        }
      });
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';
      const indexOfTodoElement = todoListCheck.id.split('').pop();
      todoArray.forEach((todo) => {
        if (todo.index === Number(indexOfTodoElement)) {
          todo.completed = false;
        }
      });
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });
});

document.getElementById('todo-footer-button').addEventListener('click', () => {
  const todoListUpdate = todoArray.filter((todo) => todo.completed === false);

  for (let i = 0; i < todoListUpdate.length; i += 1) {
    todoListUpdate[i].index = i;
  }

  todoArray = todoListUpdate;

  localStorage.setItem('todoList', JSON.stringify(todoArray));

  document.getElementById('todo-list-element').innerHTML = '';

  todoArray.forEach((todo) => {
    const todoListItemContainer = document.createElement('div');
    todoListItemContainer.classList.add('todo-element-padding');
    todoListItemContainer.classList.add('todo-item-container');

    const todoListCheck = document.createElement('input');
    todoListCheck.setAttribute('type', 'checkbox');
    todoListCheck.setAttribute('id', `todo-list-check-${todo.index}`);
    todoListCheck.classList.add('test-check');
    todoListItemContainer.appendChild(todoListCheck);

    const todoListElement = document.createElement('span');
    todoListElement.classList.add('ellipsis');
    todoListElement.innerText = todo.description;

    todoListItemContainer.appendChild(todoListElement);

    const threeDotIcon = document.createElement('span');
    threeDotIcon.innerHTML = '&#8942;';
    todoListItemContainer.appendChild(threeDotIcon);

    document
      .getElementById('todo-list-element')
      .appendChild(todoListItemContainer);

    document
      .getElementById('todo-list-element')
      .appendChild(document.createElement('hr'));

    todoListCheck.addEventListener('click', () => {
      if (todoListCheck.checked === true) {
        todoListCheck.nextElementSibling.style.textDecoration = 'line-through';
        todoListCheck.nextElementSibling.style.opacity = '0.5';
        const indexOfTodoElement = todoListCheck.id.split('').pop();
        todoArray.forEach((todo) => {
          if (todo.index === Number(indexOfTodoElement)) {
            todo.completed = true;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      } else {
        todoListCheck.nextElementSibling.style.textDecoration = 'none';
        todoListCheck.nextElementSibling.style.opacity = '1';
        const indexOfTodoElement = todoListCheck.id.split('').pop();
        todoArray.forEach((todo) => {
          if (todo.index === Number(indexOfTodoElement)) {
            todo.completed = false;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      }
    });
  });
});
