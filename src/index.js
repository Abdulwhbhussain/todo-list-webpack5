import "./style.css";

const todoArray = [
  {
    description: "Get out of bed",
    completed: false,
    index: 0,
  },
  {
    description: "Brush teeth",
    completed: false,
    index: 1,
  },
  {
    description: "Eat breakfast",
    completed: false,
    index: 2,
  },
];

todoArray.forEach((todo) => {
  const todoListElement = document.createElement("span");
  todoListElement.classList.add("todo-element-padding");
  todoListElement.innerText = todo.description;

  document.getElementById("todo-list-element").appendChild(todoListElement);
  document
    .getElementById("todo-list-element")
    .appendChild(document.createElement("hr"));
});
