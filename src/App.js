import React, { Component } from 'react';
import MapContainer from './Components/MapContainer';
import 'whatwg-fetch';
import './css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      museums: []
    };
  }

  componentDidMount() {
    const url = 'https://api.foursquare.com/v2/venues/explore?';
    const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_ID;
    const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_SECRET;
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      query: "museums",
      limit: 10,
      near: "New York City",
      v: "20182507"
    }
    fetch(url + new URLSearchParams(params), {
      method: 'GET'
    }).then(response => response.json()).then(response => this.setState({ museums: response.response.groups[0].items}))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            NYC Museums Explorer
          </p>
        </header>
        <MapContainer museums={this.state.museums}/>
      </div>
    );
  }
}

export default App;
