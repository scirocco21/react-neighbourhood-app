import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  static defaultProps = {
    center: {
      lat: 40.77,
      lng: -73.96
    },
    zoom: 13
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            NYC Museums Explorer
          </p>
        </header>
        <div style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyB5jtuQ6yhzNFto5HC0rN70krWSqAzupww' }}
           defaultCenter={this.props.center}
           defaultZoom={this.props.zoom}
         />
       </div>
      </div>
    );
  }
}

export default App;
