import { handleActions } from 'redux-actions';
import { RECEIVE_BET } from '../constants/actionTypes';
import parseBet from '../utils/parser';

const receiveBet = (state, action) => {
  const parsedBet = parseBet(action.payload);
  const { type, stake } = parsedBet;
  const { totalStakes = 0, bets = [] } = state[type] || {};
  return {
    ...state,
    [type]: {
      bets: [...bets, parsedBet],
      totalStakes: totalStakes + stake
    }
  };
};

export default handleActions({
  [RECEIVE_BET]: receiveBet
}, {});
