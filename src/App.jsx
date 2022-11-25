import { useState,useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import Confetti from 'react-confetti'
import Gamewon from './components/Gamewon'

function App() {
  
  function initializeCards(){
    return [1,2,3,4,5,6,7,8,9,10,11,12].map(i=>({value:i,isClicked:false}))
  }
  const [cards,setCards] = useState(initializeCards())

  const[scores,setScores]= useState({topScore:0,curScore:0})

  function isCardClicked(cardValue){
    return cards.find(card=>card.value===cardValue).isClicked
  }
  
  function resetGame(){
    setCards(initializeCards())
    setScores(oldScores=>({
      ...oldScores,
      topScore:oldScores.topScore<oldScores.curScore?oldScores.curScore:oldScores.topScore,
      curScore:0
    }))
  }

  function markCardClicked(clickedCardValue){

    if(isCardClicked(clickedCardValue)){
      setScores(oldScores=>({
        ...oldScores,
        topScore:oldScores.topScore<oldScores.curScore?oldScores.curScore:oldScores.topScore,
        curScore:0
      }))

      setCards(initializeCards())
    }

   else{ 
    setCards(oldCards=>oldCards.map(card=>{
      return {...card, 
        isClicked:card.value===clickedCardValue?true:card.isClicked}
      }))
    setScores(oldScores=>({
      ...oldScores,
      curScore:oldScores.curScore+1
    }))
    }}
    
  
  return (
    <div className="App">
      <header>
        <h1 className='header-title'>Memory Card Game</h1>
        <div className='score-board'>
          <h2 className='score'>Current Score:{scores.curScore}</h2>
          <h2 className='score'>Top Score:{scores.topScore}</h2>
        </div>
      </header>

      <div className='card-holder'>
        {scores.curScore==cards.length ? <Gamewon handleClick={resetGame}/>: <Cards handleClick={markCardClicked} cards={cards}/>}
      </div>
    
    </div>
  )
}

export default App
