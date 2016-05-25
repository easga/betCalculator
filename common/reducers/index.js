import { combineReducers } from 'redux';
import bets from './bets';
import currentBet from './currentBet';

const rootReducer = combineReducers({
  bets,
  currentBet
});

export default rootReducer;
