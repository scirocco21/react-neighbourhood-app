import React, {Component} from 'react';
import '../css/SideBarItem.css'

export default class SideBarItem extends Component {
  clickHandler = () => {
    this.props.animateMarker(this.props.id);
    this.props.toggleModal(this.props.id);
  }
  render() {
    let activeClass = "";
    this.props.highlighted ? activeClass = "highlight" : activeClass = ""
    return (
      <div onClick={() => this.clickHandler()}>
        <h4 className={activeClass}>{this.props.name}</h4>
      </div>
    )
  }
}
