import React, { Component } from 'react'
import CardList from './components/CardList';
import SearchField from "./components/SearchField";
import { connect } from "react-redux";
import { RequestPokemons,SearchPokemons } from './actions';
class App extends Component {
 
    componentDidMount = ()=>{   
      this.props.RequestPokemons()
    }
  render() {
    if(!this.props.pokemons){
      return <div>Loading</div>
    }
    const { pokemons, searchField, SearchPokemons } = this.props;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div>
        <SearchField onSearchChange={e=>SearchPokemons(e.target.value)} />
        <CardList pokemons={filteredPokemons} />
        }
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log(state)
     return {
       pokemons:state.RequestPokemons.Pokemons,
       searchField:state.SearchPokemons.searchField
    }
}
export default connect(mapStateToProps,{RequestPokemons,SearchPokemons})(App);
