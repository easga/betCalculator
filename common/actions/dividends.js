import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_DIVIDENDS } from '../constants/actionTypes';
import { receiveResultsError } from '../actions/currentResults';
import parseResult from '../utils/resultParser';
import calculateDividends from '../utils/dividendsCalculator';

export const receiveDividends = actionCreatorFactory(RECEIVE_DIVIDENDS);

export const calculateDividendsIfResultsValid = () =>
  (dispatch, getState) => {
    const state = getState();
    try {
      const winningRunners = parseResult(state.currentResults.value);
      const { bets, commissions } = state;
      const dividends = calculateDividends(bets, commissions, winningRunners);
      return dispatch(receiveDividends(dividends));
    } catch (e) {
      dispatch(receiveResultsError(e.message));
      return;
    }
  };
