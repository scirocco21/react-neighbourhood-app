import React, { Component } from 'react';
import SideBarItem from './SideBarItem'
import escapeRegExp from 'escape-string-regexp'
import '../css/SideBar.css';

export default class SideBar extends Component {
  state = {
    query: ""
  }

  updateQuery = query => {
    this.props.filterMarkers(query);
    this.setState( {query: query} );
  }

  render() {
    const museumsList = this.props.museums.map(museum => <SideBarItem key={museum.venue.id} id={museum.venue.id} name={museum.venue.name} highlighted={museum.highlighted}
       handleClick={this.props.animateMarker} toggleModal={this.props.toggleModal}/>)

       let showingItems;
       if (this.state.query) {
         const match = new RegExp(escapeRegExp(this.state.query), 'i');
         showingItems = museumsList.filter((item) => match.test(item.props.name));
       } else {
         showingItems = museumsList
       }

    return (
      <div id="mySidenav" className="sidenav">
        <input
          type="text"
          placeholder="Enter museum"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {showingItems}
      </div>
    )
  }
}
