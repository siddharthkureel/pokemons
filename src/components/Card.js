import React from 'react'
import Ability from "./Ability";
import Moves from "./Moves";
const Card = (props) => {
  const { name, id, order, base_experience, moves, abilities, sprites } = props;
  return (
    <div className="card">
      <img src={(!sprites) ? null : sprites.front_default} alt={name} />
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>Experience:{base_experience}</p>
        <p>Serial number:{order}</p>
        <div>Rank #{id}</div>
        <br />
        <Ability abilities={(!abilities) ? null : abilities} /><br />
        <Moves moves={(!moves) ? null : moves} /><br />
      </div>
    </div>
  )
}

export default Card;
