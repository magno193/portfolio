import { useState } from "react";

function Home() {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Home</h3>
      <Counter />
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(1);
  function addToCount() {
    setCount(count + 1);
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <strong>{count}</strong>
      <button style={{ flexBasis: '30px' }} onClick={addToCount}>
        Adicionar
      </button>
    </div>
  );
};

export default Home;
