// Testing Edit, Completed and Clear all completed Todo Components and Methods
// Need Mocks and Mutation of DOM Elements and Side Effects

import 'jest-localstorage-mock';
import todoAdd from '../modules/add';
import todoRemove from '../modules/remove';

describe('testing both add and remove functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <!-- ToDo List Container -->
    <div id="todo-list-container">
        <div id="todo-title-element" class="todo-element-padding">
            <p id="todo-title">Today's To Do</p>
            <i class="gg-sync"></i>
        </div>
        <hr>
        <div id="todo-input-element" class="todo-element-padding">
            <input id="todo-input" class="ellipsis" placeholder="Add to your list..." type="text">
            <span id="todo-enter">&#8629;</span>
        </div>
        <hr>
        <div id="todo-list-element">
        </div>
        <button id="todo-footer-button" type="button" class="link-button js-clear-completed">Clear all completed</button>
    </div>
    <script defer="defer" src="./index.js"></script>`;
  }); // You can add the code for your form here...

  afterEach(() => {
    // Clean up any changes made to the DOM
    document.body.innerHTML = '';
    localStorage.clear();
  });

  test('check if An element is Edited or Not ', () => {
    const todoArray = [];
    const item = {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    };

    todoArray.push(item);

    todoAdd(item, todoArray);

    document.querySelector('.edit-todo').click();
    document.querySelector('.edit-todo').innerText = 'Abu ka Dost Edited';
    document.querySelector('.edit-todo').click();

    // Check if an element with the expected text content was added to the DOM
    const addedItem = document.querySelector('.edit-todo').innerText;
    expect(addedItem).toBe('Abu ka Dost Edited');
    expect(todoArray[0].description).toBe('Abu ka Dost Edited');
    expect(localStorage.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('check if a new element is changing status to checked and completed as true ', () => {
    const todoArray = [];
    const item = {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    };

    todoArray.push(item);

    todoAdd(item, todoArray);

    document.querySelector('.test-check').click();

    // Check if an element with the expected text content was added to the DOM
    const addedItem = document.querySelector('.edit-todo').innerText;
    expect(document.querySelector('.test-check').checked).toBe(true);
    expect(todoArray[0].completed).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.length).toBe(1);
  });
});
