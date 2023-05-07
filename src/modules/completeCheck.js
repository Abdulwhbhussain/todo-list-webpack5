function todoCheck(todoListCheck, todoArray, indx) {
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
}

export default todoCheck;
