import React, { Component} from 'react';
import 'whatwg-fetch';
import '../css/Marker.css'

class Marker extends Component {
  clickHandler = () => {
    this.props.toggleModal(this.props.id);
    this.props.setCenter(this.props.lat, this.props.lng)
  }
  render() {
    let activeClass;
    if (this.props.active) {
      activeClass = "bounce"
    } else {
      activeClass = ""
    }
    return (
      <div className={"marker " + activeClass} onMouseOver={() => this.props.highlightLabel(this.props.id)} onMouseOut={() => this.props.removeHighlight(this.props.id)} onClick={() => this.clickHandler()}>
        <img src={this.props.icon} style={{height: '25px', width: '30px'}} alt="museum"/>
      </div>
    );
  }
}

export default Marker;
