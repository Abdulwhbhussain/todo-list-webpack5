import todoAdd from './add';

function renderOnLoad(todoArr) {
  todoArr.forEach((element, indx) => {
    todoAdd(element, todoArr);
  });
}

export default renderOnLoad;
