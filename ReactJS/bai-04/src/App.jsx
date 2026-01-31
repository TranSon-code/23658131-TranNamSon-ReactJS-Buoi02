import React, { useState } from 'react';
import StatusBadge from './components/StatusBadge';

function App() {
  const [currentStatus, setCurrentStatus] = useState('online');

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <StatusBadge status={currentStatus} />

      <nav style={{ display: 'flex', gap: '15px' }}>
        <button onClick={() => setCurrentStatus('online')}>Online</button>
        <button onClick={() => setCurrentStatus('offline')}>Offline</button>
        <button onClick={() => setCurrentStatus('busy')}>Busy</button>
      </nav>
    </section>
  );
}

export default App;