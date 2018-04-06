import React from 'react';
import PropTypes from 'prop-types';

export default class ContextWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return { initialState: this.props.initialState };
  }

  render() {
    return this.props.children;
  }
}

ContextWrapper.childContextTypes = {
  initialState: PropTypes.shape({}),
};

ContextWrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
  initialState: PropTypes.shape({}),
};
