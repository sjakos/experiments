import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: '', todos: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.todoInput}
            type="text"
          />
          <input type="submit" value="Add Todo" />
        </form>
        <TodoList
          deleteItem={this.deleteItem.bind(this)}
          completeTodo={this.completeTodo.bind(this)}
          todos={this.state.todos}
        />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTodoId = `${this.state.todoInput}_${new Date().getTime()}`;
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        { id: newTodoId, value: prevState.todoInput, completed: false },
      ],
      todoInput: '',
    }));
  }

  deleteItem(item) {
    this.setState(prevState => {
      return {
        todoInput: prevState.todoInput,
        todos: prevState.todos.filter(val => val.id !== item.id),
      };
    });
  }

  completeTodo(todo) {
    this.updateTodo(todo, { ...todo, completed: !todo.completed });
  }

  updateTodo(todo, newState) {
    const newTodos = [...this.state.todos];
    newTodos[this.state.todos.indexOf(todo)] = newState;
    this.setState(prevState => {
      return {
        ...prevState,
        todos: newTodos,
      };
    });
  }
}

export default TodoApp;
