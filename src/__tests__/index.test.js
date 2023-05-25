// Testing Add Remove Todo Components and Method
// Need Mocks and Mutation of DOM Elements and Side Effects

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
    </div>`;
  }); // You can add the code for your form here...

  afterEach(() => {
    // Clean up any changes made to the DOM
    document.body.innerHTML = '';
  });

  test('check if a new element is added', () => {
    const todoArray = [];
    const item = {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    };

    todoArray.push(item);

    todoAdd(item, todoArray);

    // Check if an element with the expected text content was added to the DOM
    const addedItem = document.querySelector('.edit-todo').innerText;
    expect(addedItem).toContain('Abu ka Dost');
  });

  const testArray1 = [
    {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    },
    {
      description: 'Abu ka Bhai',
      completed: false,
      index: 2,
    },
    {
      description: 'Abu ka Rishtedar',
      completed: true,
      index: 3,
    },
    {
      description: 'Abu ka Chacha',
      completed: false,
      index: 4,
    },
    {
      description: 'Abu ka Mama',
      completed: false,
      index: 5,
    },
    {
      description: 'Abu ka Abu',
      completed: false,
      index: 6,
    },
  ];

  const testArray1Ans = [
    {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    },
    {
      description: 'Abu ka Bhai',
      completed: false,
      index: 2,
    },
    {
      description: 'Abu ka Chacha',
      completed: false,
      index: 4,
    },
    {
      description: 'Abu ka Mama',
      completed: false,
      index: 5,
    },
    {
      description: 'Abu ka Abu',
      completed: false,
      index: 6,
    },
  ];

  test('check if it removes the proper element', () => {
    const todoArray = [];
    const item = {
      description: 'Abu ka Dost',
      completed: false,
      index: 1,
    };

    todoArray.push(item);

    todoAdd(item, todoArray);

    todoRemove(testArray1);

    // Check if the expected element was removed from the DOM
    // const removedItem = document.querySelector('.edit-todo').innerText;
    expect(todoRemove(testArray1)).toEqual(testArray1Ans);
  });
});
