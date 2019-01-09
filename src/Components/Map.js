import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from "../assets/mapStyles.js"

class Map extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
    const mapOptions = {
      styles: mapStyles
    }

    return (
      <div style={{ height: '100vh', width: '100%' }} id = "map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          options = {mapOptions}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.props.markers}
      </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
