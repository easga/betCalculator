/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import reducer from '../../common/reducers/bets';
import { RECEIVE_BET } from '../../common/constants/actionTypes';
import { validBetsState } from '../mocks/betsMock';

describe('bets reducers', () => {
  const stateBefore = {
    ...validBetsState
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.be.empty;
  });

  describe('on RECEIVE_BET', () => {
    const target = {
      value: 'Q:2,5:48',
      type: 'Q',
      runners: [
        2,
        5
      ],
      stake: 48
    };
    const action = { type: RECEIVE_BET, payload: target };
    const stateAfter = reducer(stateBefore, action);
    const gameBefore = stateBefore[target.type];
    const gameAfter = stateAfter[target.type];
    it('should not modify other games', () => {
      expect(stateAfter.W).to.deep.equal(stateBefore.W);
      expect(stateAfter.P).to.deep.equal(stateBefore.P);
      expect(stateAfter.E).to.deep.equal(stateBefore.E);
    });

    it('should not modify other bets in same game', () => {
      expect(gameAfter.bets[0]).to.deep.equal(gameBefore.bets[0]);
      expect(gameAfter.bets[1]).to.deep.equal(gameBefore.bets[1]);
    });

    it('should add new bet to the end', () => {
      expect(gameAfter.bets[gameAfter.bets.length - 1]).to.deep.equal(target);
    });

    it('should update totalStakes', () => {
      expect(gameAfter.totalStakes).to.equal(gameBefore.totalStakes + target.stake);
    });
  });
});
