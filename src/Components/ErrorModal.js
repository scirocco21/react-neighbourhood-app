import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

export default class ErrorModal extends Component {
  render() {
    return(
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Ooops...</ModalHeader>
        <ModalBody>
          Something isn't right. This page could not load any data. Sorry!
        </ModalBody>
      </Modal>
    )
  }
}
