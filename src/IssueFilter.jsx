import React from 'react';
import PropTypes from 'prop-types';

export default class IssueFilter extends React.Component { // eslint-disable-line
  constructor() {
    super();

    this.clearFilter = this.clearFilter.bind(this);
    this.setFilterOpen = this.setFilterOpen.bind(this);
    this.setFilterAssigned = this.setFilterAssigned.bind(this);
  }

  setFilterOpen(e) {
    e.preventDefault();
    this.props.setFilter({ status: 'Open' });
  }
  setFilterAssigned(e) {
    e.preventDefault();
    this.props.setFilter({ status: 'Assigned' });
  }
  clearFilter(e) {
    e.preventDefault();
    this.props.setFilter({});
  }

  render() {
    const Separator = () => <span> | </span>;
    return (
      <div>
        <button onClick={this.clearFilter}>All Issues</button>
        <Separator />
        <button onClick={this.setFilterOpen}>
          Open Issues
        </button>
        <Separator />
        <button onClick={this.setFilterAssigned}>Assigned Issues</button>
      </div>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
