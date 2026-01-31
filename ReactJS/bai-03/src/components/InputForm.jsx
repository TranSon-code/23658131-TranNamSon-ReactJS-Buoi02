import React, { useState } from 'react';
import './InputForm.css';

function InputForm() {
  // Khởi tạo state cho Tên và Email bám sát slide useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="form-container">
      <h2>Bài tập 03 - Controlled Input</h2>
      
      <div className="input-group">
        <label>Tên:</label>
        {/* Controlled Input: value liên kết với state, onChange cập nhật state */}
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nhập tên của bạn"
        />
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Nhập email của bạn"
        />
      </div>

      
      <div className="display-area">
        <h3>Thông tin đã nhập:</h3>
        <p><strong>Tên:</strong> {name || '...'}</p>
        <p><strong>Email:</strong> {email || '...'}</p>
      </div>
    </div>
  );
}

export default InputForm;