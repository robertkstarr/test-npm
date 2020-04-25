import React from 'react';
import Dice from './Dice';
import sendToFirebase from './firebase';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class={"horizontal"}>
          <Dice/> <Dice/> <Dice/> <Dice/> <Dice/>
        </div>
          <button onClick={() => {sendToFirebase({"test": "test"})}}>Button</button>
      </header>
    </div>
  );
}

export default App;
