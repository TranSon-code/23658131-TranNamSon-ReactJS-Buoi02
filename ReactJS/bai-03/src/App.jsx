import React from 'react';
import InputForm from './components/InputForm/';

function App() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa'
  };

  return (
    <div style={appStyle}>
      <InputForm />
    </div>
  );
}

export default App;