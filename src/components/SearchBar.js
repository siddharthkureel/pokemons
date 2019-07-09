import React from "react";

const SearchBar=(props)=>{
    return <input type="text" onChange={props.onSearchSubmit} placeholder="Enter your Search"/>
}
export default SearchBar;