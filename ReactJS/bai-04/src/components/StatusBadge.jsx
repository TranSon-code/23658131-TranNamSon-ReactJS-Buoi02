import React from 'react';
import './StatusBadge.css';

function StatusBadge({ status }) {
  return (
    <div className={`badge status-${status}`}>
      Status: {status}
    </div>
  );
}

export default StatusBadge;