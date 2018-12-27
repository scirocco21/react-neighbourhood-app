import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MuseumIcon from "../museum.png";


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


    return (
      <div style={{ height: '100vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.museums.map(museum =>
            <Marker
              lat = {museum.venue.location.lat}
              lng = {museum.venue.location.lng}
              icon = {MuseumIcon}
            />
          )
        }
      </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
