function todoRemove(todoArray) {
  return todoArray.filter((todo) => todo.completed === false);
}

export default todoRemove;
