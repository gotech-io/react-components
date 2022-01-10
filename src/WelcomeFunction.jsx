import PropTypes from 'prop-types';

const WelcomeFunction = ({ name, age }) => {
  return age ? <h1>Hello {name}! You are {age}!</h1> : <h1>Hello {name}!</h1>;
}

WelcomeFunction.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}

WelcomeFunction.defaultProps = {
  name: 'Stranger'
};

export default WelcomeFunction;