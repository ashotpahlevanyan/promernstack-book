import React from 'react';
import PropTypes from 'prop-types';

export default class DateInput extends React.Component {
  static displayFormat(date) {
    return (date != null && date != '') ? new Date(date).toDateString() : '';
  }

  static editFormat(date) {
    return (date != null  && date != '') ? (new Date(date)).toISOString().substr(0, 10) : '';
  }

  static unformat(str) {
    const val = new Date(str);
    return Number.isNaN(val.getTime()) ? null : val;
  }
  constructor(props) {
    super(props);

    this.state = {
      value: DateInput.editFormat(props.value),
      focused: false,
      valid: true,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({ value: DateInput.editFormat(newProps.value) });
    }
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur(e) {
    const value = DateInput.unformat(this.state.value);
    const valid = this.state.value === '' || value != null;
    if (valid !== this.state.valid && this.props.onValidityChange) {
      this.props.onValidityChange(e, valid);
    }
    this.setState({ focused: false, valid });
    if (valid) {
      this.props.onChange(e, value);
    }
  }

  onChange(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const value = (this.state.focused || !this.state.valid) ? this.state.value :
      DateInput.displayFormat(this.props.value);
    const childProps = Object.assign({}, this.props);
    delete childProps.onValidityChange;
    return (
      <input
        type="text"
        {...childProps}
        value={value}
        placeholder={this.state.focused ? 'yyyy-mm-dd' : null}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

DateInput.propTypes = {
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onValidityChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

