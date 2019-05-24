import React from 'react';

const TodoItem = ({ deleteItem, todo }) => {
  return <li onClick={() => deleteItem(todo)}>{todo.value}</li>;
};

export default TodoItem;
