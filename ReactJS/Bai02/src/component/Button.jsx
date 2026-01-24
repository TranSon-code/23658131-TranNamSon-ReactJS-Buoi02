import React from 'react';
import './Button.css';

const Button = ({ type, children, onClick }) => {
  const className = `btn ${type || 'primary'}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;