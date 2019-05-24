import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteItem }) => {
  return (
    <div>
      <ul>
        {Object.keys(todos).map(id => (
          <TodoItem key={id} deleteItem={deleteItem} todo={todos[id]} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
