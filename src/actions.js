export const RequestPokemons=()=>async (dispatch)=>{
    let array = [];
    for (let i = 1; i < 51; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => array.push(data))
    }
    
    dispatch({type:'REQUEST_POKEMONS',payload:array})
}
export const SearchPokemons=(text)=>{
    return{
        type:'SEARCH_POKEMONS',
        payload:text
    }
}