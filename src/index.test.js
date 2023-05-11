// Testing Add Remove Todo Components and Method

// Need Mocks and Mutation of DOM Elements and Side Effects

import todoRemove from './modules/remove';

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

const testArray1_Ans = [
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

const testArray2 = [
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
    completed: true,
    index: 5,
  },
  {
    description: 'Abu ka Abu',
    completed: true,
    index: 6,
  },
];

const testArray2_Ans = [
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
];

const testArray3 = [
  {
    description: 'Abu ka Dost',
    completed: true,
    index: 1,
  },
  {
    description: 'Abu ka Bhai',
    completed: true,
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
    completed: true,
    index: 5,
  },
  {
    description: 'Abu ka Abu',
    completed: true,
    index: 6,
  },
];

const testArray3_Ans = [
  {
    description: 'Abu ka Chacha',
    completed: false,
    index: 4,
  },
];

describe('Remove todo Elements using Filter ', () => {
  test('To do Remove Test 1 ', () => {
    expect(todoRemove(testArray1)).toEqual(testArray1_Ans);
  });
  test('To do Remove Test 2 ', () => {
    expect(todoRemove(testArray2)).toEqual(testArray2_Ans);
  });
  test('To do Remove Test 3 ', () => {
    expect(todoRemove(testArray3)).toEqual(testArray3_Ans);
  });
});
