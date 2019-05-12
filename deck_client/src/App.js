import React, { Component } from 'react';
import DecksContainer from './containers/DecksContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Draw some cards!</h1>
      
        
      </header>
      <body className="App-body">
      <DecksContainer />
      </body>
    </div>
  );
}

export default App;
