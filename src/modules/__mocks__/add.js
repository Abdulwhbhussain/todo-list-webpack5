import { JSDOM } from 'jsdom';

const { document } = new JSDOM('<!DOCTYPE html><html><body></body></html>').window
  .document;

const todoList = document.createElement('div');
todoList.setAttribute('id', 'todo-list-element');
document.body.appendChild(todoList);

function todoAdd(Ele, todoArray) {
  const todoListItemContainer = document.createElement('div');
  todoListItemContainer.classList.add(
    'todo-element-padding',
    'todo-item-container',
  );
  todoListItemContainer.setAttribute('id', `todo-list-container-${Ele.index}`);

  const todoListCheck = document.createElement('input');
  todoListCheck.setAttribute('type', 'checkbox');
  todoListCheck.setAttribute('id', `todo-list-check-${Ele.index}`);
  todoListCheck.classList.add('test-check');
  todoListItemContainer.appendChild(todoListCheck);

  const todoListElement = document.createElement('span');
  todoListElement.classList.add('ellipsis', 'edit-todo');
  todoListElement.setAttribute('id', `todo-list-desc-${Ele.index}`);
  todoListElement.innerText = Ele.description;
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

  // Event Listener for The Check Box

  if (Ele.completed === true) {
    todoListCheck.checked = true;
    todoListCheck.nextElementSibling.style.textDecoration = 'line-through';
    todoListCheck.nextElementSibling.style.opacity = '0.5';
  } else {
    todoListCheck.checked = false;
    todoListCheck.nextElementSibling.style.textDecoration = 'none';
    todoListCheck.nextElementSibling.style.opacity = '1';
  }

  todoListCheck.addEventListener('click', () => {
    if (todoListCheck.checked === true) {
      todoListCheck.nextElementSibling.style.textDecoration = 'line-through';
      todoListCheck.nextElementSibling.style.opacity = '0.5';
      todoArray[Ele.index - 1].completed = true;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    } else {
      todoListCheck.nextElementSibling.style.textDecoration = 'none';
      todoListCheck.nextElementSibling.style.opacity = '1';
      todoArray[Ele.index - 1].completed = false;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    }
  });

  // Event Listener for the Edit and Remove

  const bin = document.createElement('span');
  bin.classList.add('hover-bin');

  todoListElement.addEventListener('click', () => {
    if (todoListElement.getAttribute('data-clicked')) {
      todoListElement.removeAttribute('data-clicked');
      todoListElement.contentEditable = false;
      todoListElement.classList.add('ellipsis');
      todoListElement.parentElement.style.backgroundColor = 'white';
      todoListElement.parentElement.removeChild(bin);
      todoListElement.style.cursor = 'pointer';
      todoListElement.nextElementSibling.style.display = 'inline';
      bin.innerHTML = '';
      bin.style.display = 'none';
      todoArray[Ele.index - 1].description = todoListElement.innerText;
      localStorage.setItem('todoList', JSON.stringify(todoArray));
    } else {
      todoListElement.setAttribute('data-clicked', 'true');
      todoListElement.contentEditable = true;
      todoListElement.classList.remove('ellipsis');
      todoListElement.focus();
      todoListElement.parentElement.style.backgroundColor = '#f6d788';
      todoListElement.parentElement.appendChild(bin);
      todoListElement.style.cursor = 'text';
      todoListElement.nextElementSibling.style.display = 'none';
      bin.innerHTML = '&#128465;';
      bin.style.display = 'inline';
    }
  });
}

export default todoAdd;
