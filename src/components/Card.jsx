import React from 'react'

export default function Card(props) {
  return (
    <div className='card' onClick={()=>props.handleClick(props.value)}>
        <h2 >{props.value}</h2>
    </div>
  )
}
