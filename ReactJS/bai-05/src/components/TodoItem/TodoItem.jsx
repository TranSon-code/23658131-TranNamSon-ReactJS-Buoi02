import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Xóa</button>
    </li>
  );
}
export default TodoItem;