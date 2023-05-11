jest.mock('./add.js');
import renderOnLoad from './renderOnLoad';

const testArray = [
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
    completed: false,
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

describe('Render todo Elements to the Webpage ', () => {
  renderOnLoad(testArray);

  test('Todo List to Add Items to the Web Page Test ', () => {
    expect(renderOnLoad(testArray)).toBeUndefined();
  });
});
