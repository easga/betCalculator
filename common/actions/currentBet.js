import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_CURRENT_BET, RECEIVE_BET_ERROR } from '../constants/actionTypes.js';

export const receiveCurrentBet = actionCreatorFactory(RECEIVE_CURRENT_BET);
export const receiveBetError = actionCreatorFactory(RECEIVE_BET_ERROR);
