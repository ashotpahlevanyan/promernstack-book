import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row, FormGroup,
  Label, InputGroup, Button, Input, InputGroupAddon
} from 'reactstrap';

class IssueFilter extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);

    this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.effort_gte || '',
      effort_lte: props.initFilter.effort_lte || '',
      changed: false,
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.initFilter.status || '',
      effort_gte: newProps.initFilter.effort_gte || '',
      effort_lte: newProps.initFilter.effort_lte || '',
      changed: false,
    });
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  onChangeEffortGte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_gte: e.target.value, changed: true });
    }
  }

  onChangeEffortLte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_lte: e.target.value, changed: true });
    }
  }

  applyFilter() {
    const newFilter = {};
    if (this.state.status) {
      newFilter.status = this.state.status;
    }
    if (this.state.effort_gte) {
      newFilter.effort_gte = this.state.effort_gte;
    }
    if (this.state.effort_lte) {
      newFilter.effort_lte = this.state.effort_lte;
    }
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  resetFilter() {
    this.setState({
      status: this.props.initFilter.status || '',
      effort_gte: this.props.initFilter.effort_gte || '',
      effort_lte: this.props.initFilter.effort_lte || '',
      changed: false,
    });
  }

  render() {
    return (
      <Row>
        <Col xs={6} sm={4} md={3} lg={2}>
          <FormGroup>
            <Label>Status</Label>
            <Input
              type="select"
              value={this.state.status}
              onChange={this.onChangeStatus}
            >
              <option value="">(Any)</option>
              <option value="New">New</option>
              <option value="Open">Open</option>
              <option value="Assigned">Assigned</option>
              <option value="Fixed">Fixed</option>
              <option value="Verified">Verified</option>
              <option value="Closed">Closed</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <FormGroup>
            <Label>Effort</Label>
            <InputGroup>
              <Input
                value={this.state.effort_gte}
                onChange={this.onChangeEffortGte}
              /><InputGroupAddon addonType="prepend append">-</InputGroupAddon>
              <Input
                value={this.state.effort_lte}
                onChange={this.onChangeEffortLte}
              />{' '}
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={3}>
          <FormGroup>
            <Label>&nbsp;</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button color="primary" onClick={this.applyFilter}>
                Apply
                </Button>{' '}
              </InputGroupAddon>
              <InputGroupAddon addonType="append">
                <Button
                  color="secondary"
                  onClick={this.resetFilter}
                  disabled={!this.state.changed}
                >
                  Reset
                </Button>{' '}
              </InputGroupAddon>
              <InputGroupAddon addonType="append">
                <Button color="info" onClick={this.clearFilter}>
                  Clear
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  initFilter: PropTypes.shape({
    status: PropTypes.string.isRequired,
    effort_gte: PropTypes.string.isRequired,
    effort_lte: PropTypes.string.isRequired,
  }).isRequired,
};

export default IssueFilter;
