import React from 'react'
import Card from './Card';
import { CubeGrid } from 'better-react-spinkit'
const CardList = ({pokemons}) => {
  if(pokemons.length===0){
    return (<div id="cube" ><div><CubeGrid size={100} /></div></div>)
  }
  const list = pokemons.map(pokemon=>(
    <Card 
    key={pokemon.id} 
    name={pokemon.name} 
    id={pokemon.id}
    order={pokemon.order}
    sprites={pokemon.sprites}
    base_experience={pokemon.base_experience}
    moves={pokemon.moves}
    abilities={pokemon.abilities}
    />
  ))
  return <div id='main'>{list}</div>
}

export default CardList
