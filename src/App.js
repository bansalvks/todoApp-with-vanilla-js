import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board'
import Square from './Components/Square'
function App() {
  return (
    <div className="App">
      <h1>Tic - Tac - Toe</h1>
      <Board ></Board>
    </div>
  );
}

export default App;
