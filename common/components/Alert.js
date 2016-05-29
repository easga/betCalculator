import React, { PropTypes } from 'react';

const Alert = ({ className, message }) =>
  <div className={`alert ${className}`} role="alert">
    {message}
  </div>;


Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string
};

export default Alert;
