import { handleActions } from 'redux-actions';
import { RECEIVE_CURRENT_BET, RECEIVE_BET_ERROR } from '../constants/actionTypes';

const receiveBetError = (state, { payload }) => ({ ...state, error: payload });
const receiveCurrentBet = (state, { payload = '' }) => ({ value: payload, error: '' });

export default handleActions({
  [RECEIVE_CURRENT_BET]: receiveCurrentBet,
  [RECEIVE_BET_ERROR]: receiveBetError
}, {});
