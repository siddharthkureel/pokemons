import React from 'react'
const Moves = ({moves}) => {
    if(moves===null){
        return<div>
            moves
        </div>
    }else{
        // eslint-disable-next-line
        const list= moves.map(move=>{
            for(let i in move){
                return <option key={move[i].name} value={move[i].name}>{move[i].name}</option>
            }
            
        })
        return (
            <div>Moves: <select>{list}</select></div>
      )
    }
  
}

export default Moves
