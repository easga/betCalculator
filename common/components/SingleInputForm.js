// Could use redux-forms

import React, { PropTypes } from 'react';
import Alert from './Alert';

const SingleInputForm = ({ value, error, buttonText, placeholder, handleSubmit, handleChange }) => {
  const formClasses = 'p-a-1 col-lg-6 col-lg-offset-3 text-xs-center';
  return (
    <form className={formClasses} onSubmit={event => handleSubmit(event)}>
      <div className="input-group">
        <input
          onChange={event => handleChange(event.target.value)}
          value={value || ''}
          type="text"
          className="form-control"
          placeholder={placeholder}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={event => handleSubmit(event)} >
            {buttonText}
          </button>
        </span>
      </div>
      {error ? <Alert className={'alert-danger m-t-1'} message={error} /> : null}
    </form>
  );
};


SingleInputForm.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default SingleInputForm;
