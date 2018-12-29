import React, { Component } from 'react';
import Map from './Map';
import SideBar from './SideBar'
import MuseumIcon from "../assets/museum.png";
import Marker from './Marker.js'
import { Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import escapeRegExp from 'escape-string-regexp'


class MapContainer extends Component {
  constructor (){
     super();
     this.state = {
       markers: [],
       filter: "",
       museums: [],
       modal: false
     }
    }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillReceiveProps = props => {
    const museums = props.museums.map(museum => (
      { ...museum, highlighted: false })
    )
    const markers = props.museums.map(museum =>
      <Marker
         lat = {museum.venue.location.lat}
         lng = {museum.venue.location.lng}
         icon = {MuseumIcon}
         key = {museum.venue.id}
         id = {museum.venue.id}
         name = {museum.venue.name}
         active = {false}
         highlightLabel = {this.highlightLabel}
         removeHighlight = {this.removeHighlight}
         toggleModal={this.toggle}
       />
     )
    this.setState({markers: markers});
    this.setState({museums: museums})
  }

  highlightLabel = (id) => {
    let museums = this.state.museums.map(museum => {
      return museum.venue.id === id ? { ...museum, highlighted: true} : museum
    })

    this.setState({museums: museums})
  }

  removeHighlight = (id) => {
    let museums = this.state.museums.map(museum => {
      return museum.venue.id === id ? { ...museum, highlighted: false} : museum
    })

    this.setState({museums: museums})
  }

  handleClick = (id) => {
    // onClick in sidebar should trigger this function, which will move the marker with the same id as the sidebar item
     let markers = this.state.markers.map(marker => {
      return marker.props.id === id ? { ...marker, props: {...marker.props, active: true }} : marker
    })
    this.setState({markers: markers}, this.resetMarkers(id))
  }

  resetMarkers = (id) => {
    let markers = this.state.markers.map(marker => {
      return { ...marker, props: {...marker.props, active: false }}
    })
    setTimeout(()=> this.setState({markers: markers}), 750)
  }
  filterMarkers = (query) => {
    this.setState({filter: query})
  }

  render() {
    let showingMarkers;
    if (this.state.filter) {
      const match = new RegExp(escapeRegExp(this.state.filter), 'i')
      showingMarkers = this.state.markers.filter((marker) => match.test(marker.props.name))
    } else {
      showingMarkers =  this.state.markers
    }

    return (
      <div>
        <Map museums={this.props.museums} markers={showingMarkers}/>
        <SideBar museums={this.state.museums} markers={showingMarkers} handleClick={this.handleClick} filterMarkers={this.filterMarkers} filter={this.state.filter} toggleModal={this.toggle}/>
        {/* modal */}
        <div>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
           <ModalBody>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </ModalBody>
           <ModalFooter>
             Source: Foursquare API
           </ModalFooter>
         </Modal>
       </div>
      </div>
    )
  }
}

export default MapContainer;
