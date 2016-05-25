import React, { PropTypes } from 'react';
import { updateCurrentBet } from '../actions/currentBet';
import { addBetIfValid } from '../actions/bets';

const handleSubmit = (event, dispatch) => {
  event.preventDefault();
  dispatch(addBetIfValid());
};

const AddBet = ({ currentBet: { value }, dispatch }) => {
  const formClasses = 'form-inline';
  return (
    <form className={formClasses} onSubmit={event => handleSubmit(event, dispatch)}>
      <div className="input-group">
        <input
          onChange={event => dispatch(updateCurrentBet(event.target.value))}
          value={value || ''}
          type="text"
          className="form-control"
          placeholder="Place a bet"
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={event => handleSubmit(event, dispatch)} >
            Add bet
          </button>
        </span>
      </div>
    </form>
  );
};


AddBet.propTypes = {
  currentBet: PropTypes.object,
  dispatch: PropTypes.func
};
export default AddBet;
