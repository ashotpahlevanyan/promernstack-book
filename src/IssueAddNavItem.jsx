import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import {
  NavItem, Modal, Form, FormGroup,
  Label, Button, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';


import Toast from './Toast.jsx';

class IssueAddNavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: false,
      toastVisible: false,
      toastMessage: '',
      toastType: 'success',
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submit = this.submit.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  showModal(e) {
    e.preventDefault();
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  showError(message) {
    this.setState({ toastVisible: true, toastMessage: message, toastType: 'danger' });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  submit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.issueAdd;
    const newIssue = {
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    };

    fetch('/api/issues/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    }).then((response) => {
      if (response.ok) {
        response.json().then((updatedIssue) => {
          this.props.history.push(`/issues/${updatedIssue._id}`);
        });
      } else {
        response.json().then((error) => {
          this.showError(`Failed to add issue: ${error.message}`);
        });
      }
    }).catch((err) => {
      this.showError(`Error in sending data to server: ${err.message}`);
    });
  }

  render() {
    return (
      <NavItem className="float-right d-flex align-items-center">
        <Link to="" onClick={this.showModal} style={{ 'text-decoration': 'none' }}>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;Create Issue
        </Link>
        <Modal isOpen={this.state.showing} toggle={this.hideModal}>
          <ModalHeader toggle={this.hideModal}>Create Issue</ModalHeader>
          <ModalBody>
            <Form name="issueAdd">
              <FormGroup>
                <Label>Title</Label>
                <Input name="title" autoFocus />
              </FormGroup>
              <FormGroup>
                <Label>Owner</Label>
                <Input name="owner" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <div>
              <Button type="button" color="primary" onClick={this.submit}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={this.hideModal}>Cancel</Button>
            </div>
          </ModalFooter>
        </Modal>
        <Toast
          showing={this.state.toastVisible}
          message={this.state.toastMessage}
          onDismiss={this.dismissToast}
          bsStyle={this.state.toastType}
        />
      </NavItem>
    );
  }
}

IssueAddNavItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(IssueAddNavItem);
