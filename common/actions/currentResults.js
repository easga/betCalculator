import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_CURRENT_RESULTS, RECEIVE_RESULTS_ERROR } from '../constants/actionTypes.js';

export const receiveCurrentResults = actionCreatorFactory(RECEIVE_CURRENT_RESULTS);
export const receiveResultsError = actionCreatorFactory(RECEIVE_RESULTS_ERROR);
