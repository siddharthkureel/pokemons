
export const RequestPokemons =(state={Pokemons:[]},action={})=>{
     if(action.type==='REQUEST_POKEMONS'){
         return {...state,Pokemons:action.payload}
     }
     return state;
}
export const SearchPokemons=(state={searchField:''},action={})=>{
    if(action.type==='SEARCH_POKEMONS'){
        return Object.assign({}, state, { searchField: action.payload })
    }
    return state;
}
