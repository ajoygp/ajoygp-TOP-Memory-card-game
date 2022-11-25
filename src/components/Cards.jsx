import React from 'react'

export default function Cards(props) {

    let cardsLocal=[...props.cards]
    let cardElements = [];
    
    while(cardsLocal.length){
        let card = cardsLocal.splice(Math.floor(Math.random() * cardsLocal.length),1)[0];
        
        cardElements.push(<div className='card' key={card.value} onClick={()=>props.handleClick(card.value)}>
                             <h2 >{card.value}</h2>
                          </div>)

    }

    return (<div  className={"card-holder"}> {cardElements}</div>)
}