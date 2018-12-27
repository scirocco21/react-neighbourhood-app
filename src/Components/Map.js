import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MuseumIcon from "../museum.png";
import mapStyles from "../mapStyles.js"


class Map extends Component {

  static defaultProps = {
    center: {
      lat: 40.77,
      lng: -73.96
    },
    zoom: 13
  };

  render() {
    const Marker = (props) => {
      return (
        <div>
          <img src={props.icon} style={{height: '25px', width: '30px'}} alt="museum"/>
        </div>
      );
    }

    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

    const mapOptions = {
      styles: mapStyles
    }

    return (
      <div style={{ height: '100vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options = {mapOptions}
        >
          {this.props.museums.map(museum =>
            <Marker
              lat = {museum.venue.location.lat}
              lng = {museum.venue.location.lng}
              icon = {MuseumIcon}
              key = {museum.venue.id}
            />
          )
        }
      </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
