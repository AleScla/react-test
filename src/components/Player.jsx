import { useState } from 'react';
export default function Player({name, symbol}){
    const [editing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name)
    function editName(event){
        setPlayerName(event.target.value)
    }
    function handleEdit(){
        setEditing((isEdited)=> !isEdited);
    }
    return (
        <li>
            <span className="player">
            {editing ? 
              <input type='text' required value={playerName} onChange={editName}/> 
              : <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>
            {editing ? 
              <span>Save</span> : <span>Edit</span>
            }
            </button>
          </li>
    )
}