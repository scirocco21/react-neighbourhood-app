import React, { Component} from 'react';
import 'whatwg-fetch';
import '../css/Marker.css'

// TODO: when marker is clicked it makes a fetch request and populates infowindow with detailed content

class Marker extends Component {
  render() {
    let activeClass;
    if (this.props.active) {
      activeClass = "bounce"
    } else {
      activeClass = ""
    }
    return (
      <div className={"marker " + activeClass} onMouseOver={() => this.props.highlightLabel(this.props.id)} onMouseOut={() => this.props.removeHighlight(this.props.id)} onClick={() => this.props.toggleModal(this.props.id)}>
        <img src={this.props.icon} style={{height: '25px', width: '30px'}} alt="museum"/>
      </div>
    );
  }
}

export default Marker;
