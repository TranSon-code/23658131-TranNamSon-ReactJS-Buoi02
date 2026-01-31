import React from 'react';
import Counter from './components/Counter';

function App() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f2f5'
  };

  return (
    <div style={appStyle}>
      <Counter />
    </div>
  );
}

export default App;