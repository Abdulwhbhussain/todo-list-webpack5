function todoAdd(todoArray, indx) {
  return todoArray.filter((todo) => todo.index !== indx);
}

export default todoAdd;
