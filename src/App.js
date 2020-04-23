import React from 'react';
import Dice from './Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class={"horizontal"}>
          <Dice/> <Dice/> <Dice/> <Dice/> <Dice/>
        </div>
      </header>
    </div>
  );
}

export default App;
