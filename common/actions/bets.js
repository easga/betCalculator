import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_BET } from '../constants/actionTypes';
import { receiveCurrentBet, receiveBetError } from '../actions/currentBet';
import parseBet from '../utils/betParser';

export const receiveBet = actionCreatorFactory(RECEIVE_BET);

export const addBetIfValid = bet =>
  (dispatch, getState) => {
    const state = getState();
    try {
      const betToAdd = bet || (state.currentBet && state.currentBet.value);
      const parsedBet = parseBet(betToAdd);
      dispatch(receiveCurrentBet()); // clear the currentBet
      return dispatch(receiveBet(parsedBet));
    } catch (e) {
      dispatch(receiveBetError(e.message));
      return;
    }
  };
