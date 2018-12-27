import React, { Component } from 'react';
import Map from './Map';

class MapContainer extends Component {
  render() {
    return (
      <Map museums={this.props.museums} />
    )
  }
}

export default MapContainer;
