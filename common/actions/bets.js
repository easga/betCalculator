import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_BET } from '../constants/actionTypes.js';
import { updateCurrentBet } from '../actions/currentBet';

export const receiveBet = actionCreatorFactory(RECEIVE_BET);

const shouldAddBet = (state, bet) => {
  return true;
};

export const addBetIfValid = () =>
  (dispatch, getState) => {
    const state = getState();
    if (!shouldAddBet(state, state.currentBet)) { return; }
    dispatch(updateCurrentBet()); // clear the currentBet
    return dispatch(receiveBet(state.currentBet.value));
  };
