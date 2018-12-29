import React, { Component} from 'react';
import 'whatwg-fetch';
import '../css/Marker.css'

// TODO: when marker is clicked it opens a modal window or InfoBox

class Marker extends Component {
  componentDidMount() {
    const url = 'https://api.foursquare.com/v2/venues/';
    const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_ID;
    const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_SECRET;
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      v: "20182507"
    }
    // fetch(url + this.props.id + "?&" + new URLSearchParams(params), {
    //   method: 'GET'
    // }).then(response => response.json()).then(response => console.log(response))

  }

  render() {
    let activeClass;
    if (this.props.active) {
      activeClass = "bounce"
    } else {
      activeClass = ""
    }
    return (
      <div className={"marker " + activeClass} onMouseOver={() => this.props.highlightLabel(this.props.id)} onMouseOut={() => this.props.removeHighlight(this.props.id)}>
        <img src={this.props.icon} style={{height: '25px', width: '30px'}} alt="museum"/>
      </div>
    );
  }
}

export default Marker;
