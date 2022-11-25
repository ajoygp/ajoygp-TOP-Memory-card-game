import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const cards= [1,2,3,4,5,6,7,8,9,10,11,12].map(i=><Card value={i}/>)
  return (
    <div className="App">
      <header>
        <h1 className='header-title'>Memory Card Game</h1>
        <div className='score-board'>
          <h2 className='score'>Current Score:0</h2>
          <h2 className='score'>Top Score:0</h2>
        </div>
      </header>
      <div className='card-holder'>
        {cards}
      </div>
      
    </div>
  )
}

export default App
