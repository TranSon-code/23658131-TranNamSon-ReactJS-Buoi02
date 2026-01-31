import React from 'react';
import './StudentInfo.css';

function StudentInfo({ fullName, studentId, className }) {
  return (
    <div className="student-card">
      <h2>Thông tin cá nhân</h2>
      <p><strong>Họ tên:</strong> {fullName}</p>
      <p><strong>MSSV:</strong> {studentId}</p>
      <p><strong>Lớp:</strong> {className}</p>
    </div>
  );
}

export default StudentInfo;