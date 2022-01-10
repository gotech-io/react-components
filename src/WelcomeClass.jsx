import React from 'react';
import PropTypes from 'prop-types';

class WelcomeClass extends React.Component {
  render() {
    return this.props.age ? <h1>Hello {this.props.name}! You are {this.props.age}!</h1> : <h1>Hello {this.props.name}!</h1>;
  }
}

WelcomeClass.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}

WelcomeClass.defaultProps = {
  name: 'Stranger'
};

export default WelcomeClass;