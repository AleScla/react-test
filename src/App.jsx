import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard'
function App() {
  const [activePlayer, setActivePlayer ] = useState('X');
  function checkSelectedSquare(){
    // qui, nuovamente, creo una nuova variabile per non andare a modificare il valore originale di activePlayer
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="player 1" symbol="x" isActive={activePlayer === 'X'}/>
          <Player name="player 2" symbol="o" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard activePlayerSymbol={activePlayer} onSelectedSquare={checkSelectedSquare}/>
      </div>
    </main>
  )
}

export default App
