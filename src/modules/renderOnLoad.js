import todoAdd from './add';

function renderOnLoad(todoArr) {
  todoArr.forEach((element) => {
    todoAdd(element, todoArr);
  });
}

export default renderOnLoad;
