import { handleActions } from 'redux-actions';
import { UPDATE_CURRENT_BET } from '../constants/actionTypes';

const receiveCurrentBetChange = (state, { payload = '' }) => {
  if (state.currentBet === payload) { return state; }
  return {
    value: payload,
    error: ''
  };
};

export default handleActions({
  [UPDATE_CURRENT_BET]: receiveCurrentBetChange
}, {});
