import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');
  const handleAdd = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };
  return (
    <div className="todo-input-group">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm công việc mới..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}
export default TodoInput;