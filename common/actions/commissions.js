import { createAction as actionCreatorFactory } from 'redux-actions';
import { RECEIVE_COMMISSION } from '../constants/actionTypes.js';

export const receiveCommission = actionCreatorFactory(RECEIVE_COMMISSION);
