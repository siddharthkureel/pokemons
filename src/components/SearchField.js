import React, { Component } from 'react'

export default class SearchField extends Component {
   
  render() {
    return (
      <div id="searchfield" >
            <input id="input" onChange={this.props.onSearchChange}  type="text" placeholder="Enter a name" />
      </div>
    )
  }
}
