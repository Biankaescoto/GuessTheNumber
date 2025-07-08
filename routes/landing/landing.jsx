import { Link } from "react-router-dom";
import React, {useState} from 'react'

export default function Number() {
const generateNumber = () => Math.floor(Math.random() * 100) + 1;

const [computerNumber, setComputerNumber] = useState(Math.floor(Math.random() * 100)+1)
const [userGuess, setUserGuess] = useState('');
const [message, setMessage] = useState('');
const [gameOver, setGameOver] = useState(false);

const handleGuess = () => {
  const guess = parseInt(userGuess);

  if(isNaN(guess)) {
    setMessage('Please enter a valid number');
  } else if (guess < computerNumber) {
    setMessage('Too Low! try again')
  } else if (guess > computerNumber) {
    setMessage('Too High! Try again')
  } else {
    setMessage (' 🎉 Correct! Would you like to play again?')
    setGameOver(true);
  }

  setUserGuess('');

} ;

const handleReset = () => {
  setComputerNumber(generateNumber());
  setUserGuess('');
  setMessage('');
  setGameOver(false);
}

    return (
<div className="hello">
        <div className="bck">
        <div className="title-section">
        <h1> Guess the number</h1>
        <p className="desc"> Let's play a game where I (computer) make up a number, and you (human) try to guess it </p>
        </div>
       {/*  */}
<div className="form-row">
  <input 
  className="input-area" 
  type="text"
  value={userGuess}
  onChange={(e) => setUserGuess(e.target.value)}
  />
  <button 
  className="answ" 
  onClick={handleGuess}
  disabled={gameOver}>
    Submit
    </button>
    {gameOver && (
            <button className="reset-btn" onClick={handleReset}>
              Reset Game
            </button>
          )}
</div>


           {/*  */}
     <div className="output-area"> 
        <p className="says"> Computer says:</p>
        <div className="output-message"> {message}</div>
        </div>
        <Link className="click" to="/reverse"> Reverse Game, Click Here!</Link>
        </div>
        </div>
    )
}



// todo style guess the number ✅
// todo title with description ✅
// todo need a text box to input guess ✅
// todo need a submit button ✅
// todo need a an area where comp spits out output ✅

// todo Need a button that says "reverse" game with description ✅
