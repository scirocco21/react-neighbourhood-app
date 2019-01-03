import React, { Component } from 'react';
import MapContainer from './Components/MapContainer';
import 'whatwg-fetch';
import './css/App.css';
import ErrorModal from './Components/ErrorModal.js'

class App extends Component {

  constructor() {
    super();

    this.state = {
      museums: [],
      modal: false,
    };
  }

  // pull up error modal if initial API call fails
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // fetch museums data as soon as component mounts and store in state
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
    }).then(response => response.json()).then(response => this.setState({ museums: response.response.groups[0].items})).catch(() => this.toggle())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p tabIndex="1">
            NYC Museums Explorer
          </p>
        </header>
        <MapContainer museums={this.state.museums}  />
        <ErrorModal toggle={this.toggle} modal={this.state.modal}/>
      </div>
    );
  }
}

export default App;
