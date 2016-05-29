import { handleActions } from 'redux-actions';
import { RECEIVE_CURRENT_RESULTS, RECEIVE_RESULTS_ERROR } from '../constants/actionTypes';

const receiveResultsError = (state, { payload }) => ({ ...state, error: payload });
const receiveCurrentResults = (state, { payload = '' }) => ({ value: payload, error: '' });

export default handleActions({
  [RECEIVE_CURRENT_RESULTS]: receiveCurrentResults,
  [RECEIVE_RESULTS_ERROR]: receiveResultsError
}, {});
