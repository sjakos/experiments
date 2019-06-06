import React from 'react';
import TodoItem from './TodoItem';

const todoListStyle = { listStyle: 'None' };

const TodoList = ({ todos, completeTodo, deleteItem }) => {
  return (
    <div>
      <ul style={todoListStyle}>
        {Object.keys(todos).map(id => (
          <TodoItem
            key={id}
            completeTodo={completeTodo}
            deleteItem={deleteItem}
            todo={todos[id]}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
