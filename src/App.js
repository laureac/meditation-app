import React from 'react';
import './App.scss';
import image from './image.png';
import PlayerContenaire from './component/PlayerContenaire';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>#stayhome</h2>
        <h1>The Journey
        <br/>
        Begins Inside</h1>
      </header>
      <div className='main'>
        <div className="woman-wrapper">
          <img id='woman' src={image} alt='woman-zen' />
          <div className='ellipse'></div>
        </div>
      <PlayerContenaire />
      </div>
    </div>
  );
}

export default App;
