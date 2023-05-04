function todoEdit(todoArray, indx, newTodo) {
  todoArray.forEach((todo) => {
    if (todo.index === Number(indx)) {
      todo.description = newTodo;
    }
  });
}

export default todoEdit;
