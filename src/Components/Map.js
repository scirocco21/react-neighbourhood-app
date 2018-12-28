import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from "../assets/mapStyles.js"
import "../css/Map.css"


class Map extends Component {

  static defaultProps = {
    center: {
      lat: 40.77,
      lng: -73.96
    },
    zoom: 14
  };

  render() {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

    const mapOptions = {
      styles: mapStyles
    }

    return (
      <div style={{ height: '100vh', width: '87.5%' }} id = "map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options = {mapOptions}
        >
          {this.props.markers}
      </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
