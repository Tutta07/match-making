import React from 'react';
import './App.css';
import Header from './components/header/index.js';
import Cardd from './components/card/index.js';
import CardLoaded from './components/cardloaded/index';

function App() {
  return (
    <div className="App">
    
     <Header />
     <Cardd />
     <CardLoaded/>
    </div>
  );
}

export default App;
