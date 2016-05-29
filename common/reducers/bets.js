import { handleActions } from 'redux-actions';
import { RECEIVE_BET } from '../constants/actionTypes';

const receiveBet = (state, { payload }) => {
  const { type, stake } = payload;
  const { totalStakes = 0, bets = [] } = state[type] || {};
  return {
    ...state,
    [type]: {
      bets: [...bets, payload],
      totalStakes: totalStakes + stake
    }
  };
};

export default handleActions({
  [RECEIVE_BET]: receiveBet
}, {});
