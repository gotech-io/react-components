import PropTypes from 'prop-types';
import './Border.css';

const Border = ({ children }) => {
  return <div className="border">{children}</div>;
};

Border.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Border;
