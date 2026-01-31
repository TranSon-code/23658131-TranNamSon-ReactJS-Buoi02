import React, { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React cơ bản' },
    { id: 2, text: 'Làm bài tập Todo App' }
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f5f5f5'
  };

  return (
    <div style={centerStyle}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '350px' }}>
        <h2 style={{ textAlign: 'center' }}>Todo List</h2>
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
export default App;