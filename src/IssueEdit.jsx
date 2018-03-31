import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input, Label, ButtonGroup,
  Button, Card, Form, Row, Col, Alert, CardTitle, CardBody, FormFeedback
} from 'reactstrap';

import { LinkContainer } from 'react-router-bootstrap';

import NumInput from './NumInput.jsx';
import DateInput from './DateInput.jsx';
import Toast from './Toast.jsx';

export default class IssueEdit extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);

    this.state = {
      issue: {
        _id: '',
        title: '',
        status: '',
        owner: '',
        effort: null,
        completionDate: null,
        created: null,
      },
      invalidFields: {},
      showingValidation: false,
      toastVisible: false,
      toastMessage: '',
      toastType: 'success',
    };

    this.onChange = this.onChange.bind(this);
    this.loadData = this.loadData.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.dismissValidation = this.dismissValidation.bind(this);
    this.showValidation = this.showValidation.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadData();
    }
  }

  onChange(event, convertedValue) {
    const issue = Object.assign({}, this.state.issue);
    const value = (convertedValue !== undefined) ?
      convertedValue : event.target.value;
    issue[event.target.name] = value;
    this.setState({ issue });
  }

  onValidityChange(event, valid) {
    const invalidFields = Object.assign({}, this.state.invalidFields);
    if (!valid) {
      invalidFields[event.target.name] = true;
    } else {
      delete invalidFields[event.target.name];
    }
    this.setState({ invalidFields });
  }

  onSubmit(event) {
    event.preventDefault();
    this.showValidation();

    if (Object.keys(this.state.invalidFields).length !== 0) {
      return;
    }

    fetch(`/api/issues/${this.props.match.params.id}`, {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.issue),
    }).then((response) => {
      if (response.ok) {
        response.json().then((updatedIssue) => {
          updatedIssue.created = new Date(updatedIssue.created);
          if (updatedIssue.completionDate) {
            updatedIssue.completionDate = new Date(updatedIssue.completionDate);
          }
          this.setState({ issue: updatedIssue });
          this.showSuccess('Updated Issue Successfully');
        });
      }
    }).catch((err) => {
      this.showError(`Error in sending data to server: ${err.message}`);
    });
  }

  loadData() {
    fetch(`/api/issues/${this.props.match.params.id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((issue) => {
            issue.created = new Date(issue.created);
            issue.completionDate = issue.completionDate != null ?
              new Date(issue.completionDate).toDateString() : '';
            // issue.effort = issue.effort != null ? issue.effort.toString() : '';
            this.setState({ issue });
          });
        } else {
          response.json().then((error) => {
            this.showError(`Failed to fetch issue : ${error.message}`);
          });
        }
      }).catch((err) => {
        this.showError(`Error in fetching data from server : ${err.message}`);
      });
  }

  showValidation() {
    this.setState({ showingValidation: true });
  }

  dismissValidation() {
    this.setState({ showingValidation: false });
  }

  showSuccess(message) {
    this.setState({ toastVisible: true, toastMessage: message, toastType: 'success' });
  }

  showError(message) {
    this.setState({ toastVisible: true, toastMessage: message, toastType: 'danger' });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const issue = this.state.issue;
    let validationMessage = null;
    if (Object.keys(this.state.invalidFields).length !== 0
      && this.state.showingValidation) {
      validationMessage = (
        <Alert
          color="danger"
          onDismiss={this.dismissValidation}
        >
          Please correct invalid fields before submitting.
        </Alert>
      );
    }
    return (
      <Card>
        <CardBody>
          <CardTitle>Edit Issue</CardTitle>
          <Form horizontal onSubmit={this.onSubmit}>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>ID</Col>
              <Col sm={9}>
                <Input plaintext>{issue._id}</Input>
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>Created</Col>
              <Col sm={9}>
                <Input type="text" value={issue.created ? issue.created.toDateString() : ''}
                />
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>Status</Col>
              <Col sm={9}>
                <Input
                  type="select"
                  name="status"
                  value={issue.status}
                  onChange={this.onChange}
                >
                  <option value="New">New</option>
                  <option value="Open">Open</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Verified">Verified</option>
                  <option value="Closed">Closed</option>
                </Input>
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>Owner</Col>
              <Col sm={9}>
                <Input
                  name="owner"
                  value={issue.owner}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>Effort</Col>
              <Col sm={9}>
                <Input
                  tag={NumInput}
                  name="effort"
                  value={issue.effort}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <Row tag={FormGroup} validationState={this.state.invalidFields.completionDate ? 'error' : ''}>
              <Col tag={Label} sm={3}>Completion Date</Col>
              <Col sm={9}>
                <Input
                  tag={DateInput}
                  name="completionDate"
                  value={issue.completionDate}
                  onChange={this.onChange}
                  onValidityChange={this.onValidityChange}
                />
                <FormFeedback />
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col tag={Label} sm={3}>Title</Col>
              <Col sm={9}>
                <Input
                  name="title"
                  value={issue.title}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col sm={12}>
                <div className="d-flex justify-content-center">
                  <Button color="primary" type="submit">Submit</Button>
                  {' '}
                  <LinkContainer to="/issues">
                    <Button color="secondary">Back</Button>
                  </LinkContainer>
                </div>
              </Col>
            </Row>
            <Row tag={FormGroup}>
              <Col offset={3} sm={9}>{validationMessage}</Col>
            </Row>
          </Form>
          <Toast
            message={this.state.toastMessage}
            color={this.state.toastType}
            showing={this.state.toastVisible}
            onDismiss={this.dismissToast}
          />
        </CardBody>
      </Card>
    );
  }
}

IssueEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
