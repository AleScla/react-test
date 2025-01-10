import {useState} from 'react';
export default function Player({name, symbol}){
    const [editing, setEditing] = useState(false)
    return (
        <li>
            <span className="player">
            {editing ? 
              <input type='text' value={name}></input> : <span className="player-name">{name}</span>
            }
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={()=> setEditing(!editing)}>
            {editing ? 
              <span>Save</span> : <span>Edit</span>
            }
            </button>
          </li>
    )
}