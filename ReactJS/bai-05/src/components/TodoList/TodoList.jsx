import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem key={item.id} task={item} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
}
export default TodoList;