import { createAction as actionCreatorFactory } from 'redux-actions';
import { UPDATE_CURRENT_BET } from '../constants/actionTypes.js';

export const updateCurrentBet = actionCreatorFactory(UPDATE_CURRENT_BET);
