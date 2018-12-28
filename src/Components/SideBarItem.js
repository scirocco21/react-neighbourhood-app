import React from 'react'

const SideBarItem = (props) => {
  return (
    <div onClick={() => props.handleClick(props.id)}>
      <h4>{props.name}</h4>
    </div>
  )
}

export default SideBarItem;
