import {useState} from 'react';
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({ onSelectedSquare, activePlayerSymbol }){
    const [gameBoard, setGameBoard] = useState(board)

    function handleSelectedSquare(rowIndex, colIndex){
        setGameBoard((initialBoard)=>{
            // questo serve a non modificare il valore originale dell'array perchè potrebbe causare dei bug
            // best practice è creare un nuovo array ad ogni click su casella
            const updatedBoard = [...initialBoard.map((innerArray) => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard
        })
        onSelectedSquare()
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=> 
                <li key={rowIndex}>
                    <ol>
                        {row.map((square, squareIndex) => 
                            <li key={squareIndex}>
                                <button onClick={() => handleSelectedSquare(rowIndex, squareIndex)}>{square}</button>
                            </li>
                        )}
                    </ol>
                </li> 
            )}
        </ol>
    )
}