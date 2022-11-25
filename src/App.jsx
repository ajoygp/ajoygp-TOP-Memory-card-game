import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  
  const [cards,setCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12].map(i=>({value:i,isClicked:false})))
  
  function markCardClicked(value){
    setCards((oldCards)=>oldCards.map(card=>{
      return {...card, 
        isClicked:card.value===value?true:card.isClicked}
      }))
    }
    
  const cardElements = cards.map(card=><Card key={card.value} handleClick={markCardClicked} value={card.value} isClicked={card.isClicked}/>)

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
        {cardElements}
      </div>
      
    </div>
  )
}

export default App
