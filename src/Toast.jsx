import React from 'react';
import { Alert, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Toast extends React.Component {
  componentDidUpdate() {
    if (this.props.showing) {
      clearTimeout(this.dismissTimer);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    return (
      <Collapse isOpen={this.props.showing}>
        <div style={{
          position: 'fixed',
          top: 30,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
        >
          <Alert
            style={{ display: 'inline-block', width: 500 }}
            color={this.props.bsStyle}
            toggle={this.props.onDismiss}
            isOpen={true}
          >
            {this.props.message}
          </Alert>
        </div>
      </Collapse>
    );
  }
}

Toast.propTypes = {
  showing: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  color: PropTypes.string,
  message: PropTypes.shape({}).isRequired,
};

Toast.defaultProps = {
  color: 'success',
};
