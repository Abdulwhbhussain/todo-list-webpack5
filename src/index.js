import './style.css';
// import todoAdd from './modules/add';
import todoRemove from './modules/remove';
import todoEdit from './modules/edit';
import todoCheck from './modules/completeCheck';

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

todoArray.forEach((todo) => {
  const todoListItemContainer = document.createElement('div');
  todoListItemContainer.classList.add('todo-element-padding');
  todoListItemContainer.classList.add('todo-item-container');
  todoListItemContainer.setAttribute('id', `todo-list-container-${todo.index}`);

  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${todo.index}`);
  todoListCheck.classList.add('test-check');
  todoListItemContainer.appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('ellipsis', 'edit-todo');
  todoListElement.setAttribute('id', `todo-list-desc-${todo.index}`);
  todoListElement.innerText = todo.description;

  todoListItemContainer.appendChild(todoListElement);

  const threeDotIcon = document.createElement('span');
  threeDotIcon.classList.add('hover-three-dot');
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

      todoArray[todo.index - 1].completed = true;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';

      todoArray[todo.index - 1].completed = false;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });

  const bin = document.createElement('span');
  bin.classList.add('hover-bin');
  todoListElement.parentElement.appendChild(bin);

  todoListElement.addEventListener('click', () => {
    if (!todoListElement.getAttribute('data-clicked')) {
      todoListElement.setAttribute('data-clicked', 'true');

      todoListElement.contentEditable = true;
      todoListElement.classList.remove('ellipsis');
      todoListElement.focus();
      todoListElement.parentElement.style.backgroundColor = '#f6d788';
      todoListElement.style.cursor = 'text';
      todoListElement.nextElementSibling.style.display = 'none';
      bin.innerHTML = '&#128465;';
      bin.style.display = 'inline';
      bin.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('bin clicked');
        todoArray[todo.index - 1].completed = true;
        console.log(todoArray);
        console.log(todoArray[todo.index - 1]);
        todoArray = todoRemove(todoArray);
        console.log(todoArray);
        todoArray.forEach((todo, ind) => {
          todo.index = ind + 1;
        });
        console.log(todoArray);
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      });
    } else {
      todoListElement.removeAttribute('data-clicked');

      todoListElement.contentEditable = false;
      todoListElement.classList.add('ellipsis');
      todoListElement.parentElement.style.backgroundColor = 'white';
      todoListElement.style.cursor = 'pointer';
      todoListElement.nextElementSibling.style.display = 'inline';
      bin.innerHTML = '';
      bin.style.display = 'none';

      todoArray[todo.index - 1].description = todoListElement.innerText;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });
});

const todoListRender = (desc, complete, indx) => {
  const todoListItemContainer = document.createElement('div');
  todoListItemContainer.classList.add('todo-element-padding');
  todoListItemContainer.classList.add('todo-item-container');
  todoListItemContainer.setAttribute('id', `todo-list-container-${indx}`);

  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${indx}`);
  todoListCheck.classList.add('todo-list-check');
  todoListItemContainer.appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('ellipsis', 'edit-todo');
  todoListElement.setAttribute('id', `todo-list-desc-${indx}`);
  todoListElement.innerText = desc;

  todoListItemContainer.appendChild(todoListElement);

  const threeDotIcon = document.createElement('span');
  threeDotIcon.classList.add('hover-three-dot');
  threeDotIcon.innerHTML = '&#8942;';
  todoListItemContainer.appendChild(threeDotIcon);

  document
    .getElementById('todo-list-element')
    .appendChild(todoListItemContainer);

  document
    .getElementById('todo-list-element')
    .appendChild(document.createElement('hr'));

  const bin = document.createElement('span');
  bin.classList.add('hover-bin');
  todoListElement.parentElement.appendChild(bin);

  todoListElement.addEventListener('click', () => {
    if (!todoListElement.getAttribute('data-clicked')) {
      todoListElement.setAttribute('data-clicked', 'true');

      todoListElement.contentEditable = true;
      todoListElement.classList.remove('ellipsis');
      todoListElement.focus();
      todoListElement.parentElement.style.backgroundColor = '#f6d788';
      todoListElement.style.cursor = 'text';
      todoListElement.nextElementSibling.style.display = 'none';
      bin.innerHTML = '&#128465;';
      bin.style.display = 'inline';
      bin.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('bin clicked');
        todoArray[indx - 1].completed = true;
        console.log(todoArray);
        console.log(todoArray[indx - 1]);
        todoArray = todoRemove(todoArray);
        console.log(todoArray);
        todoArray.forEach((todo, ind) => {
          todo.index = ind + 1;
        });
        console.log(todoArray);
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      });
    } else {
      todoListElement.removeAttribute('data-clicked');

      todoListElement.contentEditable = false;
      todoListElement.classList.add('ellipsis');
      todoListElement.parentElement.style.backgroundColor = 'white';
      todoListElement.style.cursor = 'pointer';
      todoListElement.nextElementSibling.style.display = 'inline';
      bin.innerHTML = '';
      bin.style.display = 'none';

      const indexOfTodoElement = indx;

      todoEdit(todoArray, indexOfTodoElement, todoListElement.innerText);
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });

  todoListCheck.addEventListener('click', () => {
    todoCheck(todoListCheck, todoArray, indx);
  });
};

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
  todoListRender(descriptionTodo, false, todoArray[todoArray.length - 1].index);
});

document.getElementById('todo-footer-button').addEventListener('click', () => {
  const todoListUpdate = todoRemove(todoArray);

  for (let i = 0; i < todoListUpdate.length; i += 1) {
    todoListUpdate[i].index = i + 1;
  }

  todoArray = todoListUpdate;

  localStorage.setItem('todoList', JSON.stringify(todoArray));

  document.getElementById('todo-list-element').innerHTML = '';

  todoArray.forEach((todo) => {
    const todoListItemContainer = document.createElement('div');
    todoListItemContainer.classList.add('todo-element-padding');
    todoListItemContainer.classList.add('todo-item-container');
    todoListItemContainer.setAttribute(
      'id',
      `todo-list-container-${todo.index}`,
    );

    const todoListCheck = document.createElement('input');
    todoListCheck.setAttribute('type', 'checkbox');
    todoListCheck.setAttribute('id', `todo-list-check-${todo.index}`);
    todoListCheck.classList.add('test-check');
    todoListItemContainer.appendChild(todoListCheck);

    const todoListElement = document.createElement('span');
    todoListElement.classList.add('ellipsis', 'edit-todo');
    todoListElement.setAttribute('id', `todo-list-desc-${todo.index}`);
    todoListElement.innerText = todo.description;

    todoListItemContainer.appendChild(todoListElement);

    const threeDotIcon = document.createElement('span');
    threeDotIcon.classList.add('hover-three-dot');
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

        todoArray[todo.index - 1].completed = true;
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      } else {
        todoListCheck.nextElementSibling.style.textDecoration = 'none';
        todoListCheck.nextElementSibling.style.opacity = '1';

        todoArray[todo.index - 1].completed = false;
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      }
    });

    const bin = document.createElement('span');
    bin.classList.add('hover-bin');
    todoListElement.parentElement.appendChild(bin);

    todoListElement.addEventListener('click', () => {
      if (!todoListElement.getAttribute('data-clicked')) {
        todoListElement.setAttribute('data-clicked', 'true');

        todoListElement.contentEditable = true;
        todoListElement.classList.remove('ellipsis');
        todoListElement.focus();
        todoListElement.parentElement.style.backgroundColor = '#f6d788';
        todoListElement.style.cursor = 'text';
        todoListElement.nextElementSibling.style.display = 'none';
        bin.innerHTML = '&#128465;';
        bin.style.display = 'inline';
        bin.addEventListener('click', (e) => {
          e.stopPropagation();
          console.log('bin clicked');
          todoArray[todo.index - 1].completed = true;
          console.log(todoArray);
          console.log(todoArray[todo.index - 1]);
          todoArray = todoRemove(todoArray);
          console.log(todoArray);
          todoArray.forEach((todo, ind) => {
            todo.index = ind + 1;
          });
          console.log(todoArray);
          localStorage.setItem('todoList', JSON.stringify(todoArray));
        });
      } else {
        todoListElement.removeAttribute('data-clicked');

        todoListElement.contentEditable = false;
        todoListElement.classList.add('ellipsis');
        todoListElement.parentElement.style.backgroundColor = 'white';
        todoListElement.style.cursor = 'pointer';
        todoListElement.nextElementSibling.style.display = 'inline';
        bin.innerHTML = '';
        bin.style.display = 'none';
        todoArray[todo.index - 1].description = todoListElement.innerText;
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      }
    });
  });
});
