import React, { Component} from 'react';
import '../css/Marker.css'

// TODO: when marker is clicked it opens a modal window or InfoBox

class Marker extends Component {
  render() {
    let activeClass;
    if (this.props.active) {
      activeClass = "bounce"
    } else {
      activeClass = ""
    }
    return (
      <div className={activeClass}>
        <img src={this.props.icon} style={{height: '25px', width: '30px'}} alt="museum"/>
      </div>
    );
  }
}

export default Marker;
