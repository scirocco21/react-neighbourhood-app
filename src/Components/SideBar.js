import React, { Component } from 'react';
import SideBarItem from './SideBarItem'
import escapeRegExp from 'escape-string-regexp'
import '../css/SideBar.css';

export default class SideBar extends Component {
  state = {
    query: "",
    isVisible: true,
    showOpen: false,
    showClose: true
  }

  updateQuery = query => {
    this.props.filterMarkers(query);
    this.setState( {query: query} );
  }

  openSideBar = e => {
    e.preventDefault();
    this.setState({isVisible: true, showOpen: false, showClose: true})
  }

  handleClose = e => {
    e.preventDefault();
    this.setState({isVisible: false, showOpen: true, showClose: false})
  }

  render() {
    // populate sidebar with museum names
    const museumsList = this.props.museums.map(museum =>
      <SideBarItem
        key={museum.venue.id}
        id={museum.venue.id}
        lat={museum.venue.location.lat}
        lng={museum.venue.location.lng}
        name={museum.venue.name}
        highlighted={museum.highlighted}
        animateMarker={this.props.animateMarker}
        toggleModal={this.props.toggleModal}
        setCenter={this.props.setCenter}
      />
    )
     // filter museums and return filtered list for display in return()
     let showingItems;
     if (this.state.query) {
       const match = new RegExp(escapeRegExp(this.state.query), 'i');
       showingItems = museumsList.filter((item) => match.test(item.props.name));
     } else {
       showingItems = museumsList
     }
     // handle sidebar navigation
     let visibility, openClass, closeClass;
     if (!this.state.isVisible) {
       visibility = "hidden";
     } else {
       visibility = "";;
     }
     if (this.state.showClose) {
       openClass = "button-hidden";
       closeClass = "";
     } else {
       openClass = "";
       closeClass = "button-hidden";
     }

    return (
      <div>
        <nav className={"sidenav " + visibility}>
          <a href="#close-menu" className={"closebtn " + closeClass} role="button" aria-pressed="false" onClick={(e) => this.handleClose(e)}>x</a>
          <a href="#menu" className={"openbtn "  + openClass} role="button" aria-pressed="false" onClick={(e)=>this.openSideBar(e)}>&#8250;</a>
          <br/>
          <div className="select-style">
            <select onChange={(e) => this.props.setLimit(parseInt(e.target.value))} tabIndex="2">
              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="15">15</option>
            </select>
          </div>
          <br/>
          <input
            type="text"
            placeholder="Enter museum"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            tabIndex="2"
          />
          {showingItems}
        </nav>
        <div className="overlay">
        </div>
      </div>
    )
  }
}
