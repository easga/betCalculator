import React, { PropTypes } from 'react';
import { receiveCurrentBet } from '../actions/currentBet';
import { addBetIfValid } from '../actions/bets';
import SingleInputForm from './SingleInputForm';
import { addBetText, addBetPlaceHolder, betInstructions } from '../constants/messages';

const handleSubmit = (event, dispatch, bet) => {
  event.preventDefault();
  dispatch(addBetIfValid(bet));
};

const AddBet = ({ currentBet = {}, dispatch }) =>
  <section className="m-b-2">
    <div className="text-xs-center">{betInstructions}</div>
    <SingleInputForm
      {...currentBet}
      buttonText={addBetText}
      placeholder={addBetPlaceHolder}
      handleSubmit={event => handleSubmit(event, dispatch, currentBet.value)}
      handleChange={value => dispatch(receiveCurrentBet(value))}
    />
    <div className="clearfix"></div>
  </section>;


AddBet.propTypes = {
  currentBet: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
export default AddBet;
