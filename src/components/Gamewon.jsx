import Confetti from 'react-confetti'


export default function Gamewon(props) {
    
    return(
        <div>
            <h2>You Won!</h2>
            <button onClick={props.handleClick}>Play Again</button>
            <Confetti />
        </div>
    )
}