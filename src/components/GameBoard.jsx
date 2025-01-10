
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({ onSelectedSquare, turns }){
    let gameBoard = board;
    for(const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    // commentato perchè gestire la logica interamente qui non ci permetteva di avere dei log della partita nella pagina principale.
    // const [gameBoard, setGameBoard] = useState(board)
    // function handleSelectedSquare(rowIndex, colIndex){
    //     setGameBoard((initialBoard)=>{
    //         // questo serve a non modificare il valore originale dell'array perchè potrebbe causare dei bug
    //         // best practice è creare un nuovo array ad ogni click su casella
    //         const updatedBoard = [...initialBoard.map((innerArray) => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard
    //     })
    //     onSelectedSquare()
    // }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=> 
                <li key={rowIndex}>
                    <ol>
                        {row.map((singleSquare, squareIndex) => 
                            <li key={squareIndex}>
                                <button onClick={() => onSelectedSquare(rowIndex, squareIndex)} disabled={singleSquare !== null}>
                                    {singleSquare}
                                </button>
                            </li>
                        )}
                    </ol>
                </li> 
            )}
        </ol>
    )
}