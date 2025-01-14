import {useState} from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver'
import { WINNING_COMBINATIONS } from './winning-combinations';
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer ] = useState('X');
  // questo map va a creare una copia dell'array originale, questo perchè
  // facendo il restart, la variabile gameBoard in memoria non veniva svuotata
  // in questo modo, mappiamo con lo spread operator per creare delle copie
  // conformi sia di gameBoard che degli array annidati di quest'ultimo.
  let gameBoard = [...board.map(array => [...array])];
  for(const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
  }
  let winner
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol == thirdSquareSymbol){
      winner = firstSquareSymbol;
    }
  }
  // questa variabile stabilirà un eventuale pareggio,
  // se ci sono 9 turni e il vincitore è ancora undefined allora setta il gameDraw a true
  const gameDraw = gameTurns.length === 9 && !winner;

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
  function resetGame(){
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="player 1" symbol="x" isActive={activePlayer === 'X'}/>
          <Player name="player 2" symbol="o" isActive={activePlayer === 'O'}/>
        </ol>
        { (winner || gameDraw) && <GameOver onRematch={resetGame} winner={ winner }/>}
        <GameBoard onSelectedSquare={checkSelectedSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
