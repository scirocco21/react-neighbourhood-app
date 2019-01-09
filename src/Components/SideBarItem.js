import React, {Component} from 'react';
import '../css/SideBarItem.css'

export default class SideBarItem extends Component {
  clickHandler = () => {
    this.props.setCenter(this.props.lat, this.props.lng);
    this.props.animateMarker(this.props.id);
    this.props.toggleModal(this.props.id);
  }
  render() {
    let activeClass = "";
    this.props.highlighted ? activeClass = "highlight" : activeClass = ""
    return (
      <div onClick={() => this.clickHandler()} role="button" aria-pressed="false">
        <h4 tabIndex="3" className={activeClass}>{this.props.name}</h4>
      </div>
    )
  }
}
