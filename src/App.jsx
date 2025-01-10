import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer ] = useState('X');
  for (const combination of WINNING_COMBINATIONS){
    
  }

  function checkSelectedSquare(rowIndex, colIndex){
    // qui, nuovamente, creo una nuova variabile per non andare a modificare il valore originale di activePlayer
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns( prevGameTurns => {
      let currentPlayer = 'X'
      if(prevGameTurns.length > 0 && prevGameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{square : { row: rowIndex, col: colIndex}, player: activePlayer},  ...prevGameTurns]
      
      return updatedTurns
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="player 1" symbol="x" isActive={activePlayer === 'X'}/>
          <Player name="player 2" symbol="o" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectedSquare={checkSelectedSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
