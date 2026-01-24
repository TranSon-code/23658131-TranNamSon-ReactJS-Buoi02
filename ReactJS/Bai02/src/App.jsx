import Button from './component/Button';

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  );
}

export default App;