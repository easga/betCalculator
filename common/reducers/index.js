import { combineReducers } from 'redux';
import bets from './bets';
import commissions from './commissions';
import currentBet from './currentBet';
import currentResults from './currentResults';
import dividends from './dividends';

const rootReducer = combineReducers({
  bets,
  commissions,
  currentBet,
  currentResults,
  dividends
});

export default rootReducer;
