import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {

  const [count, setCount] = useState(0);
  const [isDayTime, setDayTime] = useState(true)
  return (
    <div className={`App ${isDayTime ? 'dayTime' : 'nightTime'}`}>
      <h1>Counter App</h1>
      <Counter counter={count} inc={() => setCount(count + 1)} dec={() => setCount(count - 1)} />
      <button onClick={() => setDayTime(!isDayTime)}>Change Time</button>
    </div>
  );
}

export default App;
