import React from 'react';

const todoItemStyle = {
  cursor: 'pointer',
};

const TodoItem = ({ deleteItem, completeTodo, todo }) => {
  return (
    <li>
      <span
        style={
          todo.completed
            ? { ...todoItemStyle, textDecoration: 'line-through' }
            : todoItemStyle
        }
        onClick={() => completeTodo(todo)}
      >
        {todo.value}
      </span>
      <button aria-label="delete" onClick={() => deleteItem(todo)}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;

// TODO: look into this css example - https://tympanus.net/codrops/2015/02/26/inspiration-button-styles-effects/
