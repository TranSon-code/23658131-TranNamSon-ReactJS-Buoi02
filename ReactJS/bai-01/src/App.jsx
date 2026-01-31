import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StudentInfo from './components/StudentInfo/StudentInfo';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <StudentInfo 
          fullName="Nguyễn Văn A" 
          studentId="20261234" 
          className="K26-PM" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;