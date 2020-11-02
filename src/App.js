import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [ score, setScore ] = useState(0);
  const [ message, setMessage ] = useState('Welcome!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ score }</h1>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          Increase score
        </button>
        <h2>{ message }</h2>
      </header>
    </div>
  );
}

export default App;
