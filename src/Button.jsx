import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
