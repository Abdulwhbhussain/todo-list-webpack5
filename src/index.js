import './style.css';
import todoAdd from './modules/add';
import todoRemove from './modules/remove';
import todoEdit from './modules/edit';

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
  console.log('todoListRender function Index: ' + indx);
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

  // threeDotIcon.addEventListener('click', () => {
  //   threeDotIcon.parentElement.style.backgroundColor = '#f2f2f2';
  // });

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

      todoArray[indx - 1].completed = true;
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';

      todoArray[indx - 1].completed = false;
    }
    localStorage.setItem('todoList', JSON.stringify(todoArray));
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
      bin.onclick = () => {
        todoListElement.contentEditable = false;
        todoListElement.classList.add('ellipsis');
        todoListElement.parentElement.style.backgroundColor = 'white';
        todoListElement.style.cursor = 'pointer';
        todoListElement.nextElementSibling.style.display = 'inline';
        bin.innerHTML = '';
        bin.style.display = 'none';

        document.querySelector(`#todo-list-container-${indx} + hr`).remove();
        document.getElementById(`todo-list-container-${indx}`).remove();

        todoArray = todoAdd(todoArray, indx);
        todoArray.forEach((todo, ind) => {
          todo.index = ind + 1;

          document
            .getElementsByClassName('todo-item-container')
            [ind].setAttribute('id', `todo-list-container-${ind + 1}`);
          document
            .getElementsByClassName('todo-list-check')
            [ind].setAttribute('id', `todo-list-check-${ind + 1}`);
          document
            .getElementsByClassName('edit-todo')
            [ind].setAttribute('id', `todo-list-desc-${ind + 1}`);
        });

        localStorage.setItem('todoList', JSON.stringify(todoArray));
      };
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
};

document.getElementById('todo-enter').addEventListener('click', () => {
  const descriptionTodo = InputElementTodo.value;
  InputElementTodo.value = '';
  localStorage.setItem('input', InputElementTodo.value);

  console.log(todoArray.length + 'Before push');

  todoArray.push({
    description: descriptionTodo,
    completed: false,
    index: todoArray.length === 0 ? 1 : todoArray.length + 1,
  });

  console.log(todoArray.length + 'After push');
  console.log(
    todoArray[todoArray.length - 1].index +
      'Index After the Push Given to the todo function',
  );

  localStorage.setItem('todoList', JSON.stringify(todoArray));
  todoListRender(descriptionTodo, false, todoArray[todoArray.length - 1].index);
});

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
      const indexOfTodoElement = todoListCheck.id.split('').pop();
      todoArray.forEach((tod) => {
        if (tod.index === Number(indexOfTodoElement)) {
          tod.completed = true;
        }
      });
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';
      const indexOfTodoElement = todoListCheck.id.split('').pop();
      todoArray.forEach((tod) => {
        if (tod.index === Number(indexOfTodoElement)) {
          tod.completed = false;
        }
      });
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
      bin.onclick = () => {
        document
          .querySelector(`#todo-list-container-${todo.index} + hr`)
          .remove();
        document.getElementById(`todo-list-container-${todo.index}`).remove();

        todoArray = todoAdd(todoArray, todo.index);
        todoArray.forEach((todo, ind) => {
          todo.index = ind + 1;

          document
            .getElementsByClassName('todo-item-container')
            [ind].setAttribute('id', `todo-list-container-${ind + 1}`);
          document
            .getElementsByClassName('todo-list-check')
            [ind].setAttribute('id', `todo-list-check-${ind + 1}`);
          document
            .getElementsByClassName('edit-todo')
            [ind].setAttribute('id', `todo-list-desc-${ind + 1}`);
        });

        localStorage.setItem('todoList', JSON.stringify(todoArray));
      };
    } else {
      todoListElement.removeAttribute('data-clicked');

      todoListElement.contentEditable = false;
      todoListElement.classList.add('ellipsis');
      todoListElement.parentElement.style.backgroundColor = 'white';
      todoListElement.style.cursor = 'pointer';
      todoListElement.nextElementSibling.style.display = 'inline';
      bin.innerHTML = '';
      bin.style.display = 'none';
      const indexOfTodoElement = todo.index;

      todoArray.forEach((tod) => {
        if (tod.index === Number(indexOfTodoElement)) {
          tod.description = todoListElement.innerText;
        }
      });
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });
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
        const indexOfTodoElement = todo.index;
        todoArray.forEach((tod) => {
          if (tod.index === Number(indexOfTodoElement)) {
            tod.completed = true;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      } else {
        todoListCheck.nextElementSibling.style.textDecoration = 'none';
        todoListCheck.nextElementSibling.style.opacity = '1';
        const indexOfTodoElement = todoListCheck.id.split('').pop();
        todoArray.forEach((tod) => {
          if (tod.index === Number(indexOfTodoElement)) {
            tod.completed = false;
          }
        });
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
        bin.onclick = () => {
          document
            .querySelector(`#todo-list-container-${todo.index} + hr`)
            .remove();
          document.getElementById(`todo-list-container-${todo.index}`).remove();

          todoArray = todoAdd(todoArray, todo.index);
          todoArray.forEach((todo, ind) => {
            todo.index = ind + 1;

            document
              .getElementsByClassName('todo-item-container')
              [ind].setAttribute('id', `todo-list-container-${ind + 1}`);
            document
              .getElementsByClassName('todo-list-check')
              [ind].setAttribute('id', `todo-list-check-${ind + 1}`);
            document
              .getElementsByClassName('edit-todo')
              [ind].setAttribute('id', `todo-list-desc-${ind + 1}`);
          });
          localStorage.setItem('todoList', JSON.stringify(todoArray));
        };
      } else {
        todoListElement.removeAttribute('data-clicked');

        todoListElement.contentEditable = false;
        todoListElement.classList.add('ellipsis');
        todoListElement.parentElement.style.backgroundColor = 'white';
        todoListElement.style.cursor = 'pointer';
        todoListElement.nextElementSibling.style.display = 'inline';
        bin.innerHTML = '';
        bin.style.display = 'none';
        const indexOfTodoElement = todo.index;

        todoArray.forEach((tod) => {
          if (tod.index === Number(indexOfTodoElement)) {
            tod.description = todoListElement.innerText;
          }
        });
        localStorage.setItem('todoList', JSON.stringify(todoArray));
      }
    });
  });
});
