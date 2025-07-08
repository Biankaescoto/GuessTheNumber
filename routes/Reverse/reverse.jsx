import React, { useState } from "react";
import { Link } from "react-router-dom";


const ComputerGuessGame = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [guess, setGuess] = useState(Math.floor((1 + 100) / 2));
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Is your number...");
  const [cheating, setCheating] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
    const initialGuess = Math.floor((1+100) / 2);
    setMessage(`Is your number... ${initialGuess}`);
  };

  const handleAnswer = (answer) => {
    if (answer === "y") {
      setMessage(`🎉 I guessed it! Your number was ${guess}.`);
      setGameOver(true);
    } else {
      setMessage("Is your number higher or lower?");
    }
  };

  const handleHint = (hint) => {
    if (hint === "h") {
      const newMin = guess + 1;
      if (newMin > max) {
        setCheating(true);
        return;
      }
      setMin(newMin);
      const newGuess = Math.floor((newMin + max) / 2);
      setGuess(newGuess);
      setMessage(`Is it... ${newGuess}?`);
    } else if (hint === "l") {
      const newMax = guess - 1;
      if (min > newMax) {
        setCheating(true);
        return;
      }
      setMax(newMax);
      const newGuess = Math.floor((min + newMax) / 2);
      setGuess(newGuess);
      setMessage(`Is it... ${newGuess}?`);
    }
  };

  const restartGame = () => {
    setMin(1);
    setMax(100);
    const newGuess = Math.floor((1 + 100) / 2);
    setGuess(newGuess);
    setMessage(`Is your number... ${newGuess}?`);
    setGameOver(false);
    setCheating(false);
  };

  return (
    <div className="back-reverse"> 
    <div className="computer-game">
      <h2>Reverse Guess the Number</h2>
      <p className="rev-desc">  Choose a number between 1-100 and I will try to guess your number. When you have you number in mind press the start button below </p>

      {!gameStarted ? (
        <button onClick={handleStart}> Start Game </button>
      ): cheating ? (
        <div className="err-section"> 
        <p className="error"> You're cheating! 😡 No number fits your clues. Try again!
        </p> 
        <button onClick={restartGame}> Reset Game</button>
        </div>
      ) : (
        <div>
          <p className="message">{message}</p>
          {!gameOver ? (
            <>
              <button onClick={() => handleAnswer("y")}>Yes</button>
              <button onClick={() => handleAnswer("n")}>No</button>
              <div className="hint-buttons">
                <button onClick={() => handleHint("h")}>Higher</button>
                <button onClick={() => handleHint("l")}>Lower</button>
              </div>
            </>
          ) : (
            <button onClick={restartGame}> Reset Game</button>
          )}
        </div>
      )}
    <Link className="original-g" to="/">   ← Back to the original game</Link>
    </div>
    </div>
  );
};

export default ComputerGuessGame;



//TODO style reverse game  ✅
// todo need title  with a description  ✅
// todo need a box for users number entry ( decided against entry box )✅
// todo need two buttons for yes or no  ✅
// todo Need area where comp spits out output  ✅
//  todo need buttons for higher or lower ✅
// todo Need arrow to go back to original game 
// todo Need the computer to show its initial number it guessed to begin with which is activated by a start button. ✅
// Todo Need the "Is your number to only show once the start button is selected" ✅