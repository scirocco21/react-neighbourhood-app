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
       modal: false,
       selectedMuseum: {}
     }
    }


  toggle = (id) => {
    if (this.state.modal === false) {
      const url = 'https://api.foursquare.com/v2/venues/';
      const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_ID;
      const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_SECRET;
      const params = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        v: "20182507"
      }
      fetch(url + id + "?&" + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json()).then(response => this.setState({selectedMuseum: response.response.venue})).then(() => console.log(this.state.selectedMuseum))
    } else {
      this.setState({selectedMuseum: {} })
    }
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

  animateMarker = (id) => {
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

    const museum = this.state.selectedMuseum

    return (
      <div>
        <Map museums={this.props.museums} markers={showingMarkers}/>
        <SideBar museums={this.state.museums} markers={showingMarkers} animateMarker={this.animateMarker} filterMarkers={this.filterMarkers} filter={this.state.filter} toggleModal={this.toggle}/>
        {/* modal */}
        <div>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalHeader toggle={this.toggle}>{museum.name}</ModalHeader>
           <ModalBody>
             <img src={museum.bestPhoto && museum.bestPhoto.prefix + "250x250" + museum.bestPhoto.suffix} alt={museum.name}/>
             <p><em>{museum.description || "No description available for this venue"}</em></p>
             <a href={museum.url}>{museum.url}</a>
             <p>Rating: {museum.rating}</p>
             <hr/>
             <p>{museum.hours && museum.hours.status}</p>
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
