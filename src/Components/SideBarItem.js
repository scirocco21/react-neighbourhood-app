import React, {Component} from 'react';
import '../css/SideBarItem.css'

export default class SideBarItem extends Component {
  render() {
    let activeClass = "";
    this.props.highlighted ? activeClass = "highlight" : activeClass = ""
    return (
      <div onClick={() => this.props.handleClick(this.props.id)}>
        <h4 className={activeClass}>{this.props.name}</h4>
      </div>
    )
  }
}
