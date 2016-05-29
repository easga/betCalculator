/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { calculateDividendsIfResultsValid, receiveDividends } from '../../common/actions/dividends';
import { RECEIVE_DIVIDENDS, RECEIVE_RESULTS_ERROR } from '../../common/constants/actionTypes';
import { resultsPatternError } from '../../common/constants/messages';
import { validBetsState } from '../mocks/betsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('dividendsActions', () => {
  describe('receiveDividends action', () => {
    it('factory should exist', () => {
      expect(receiveDividends).to.be.a('function');
    });

    it('should create receiveDividends action', () => {
      const receiveBetAction = receiveDividends('something');
      expect(receiveBetAction.type).to.equal(RECEIVE_DIVIDENDS);
      expect(receiveBetAction.payload).to.equal('something');
    });
  });

  describe('calculateDividendsIfResultsValid action', () => {
    it('factory should exist', () => {
      expect(calculateDividendsIfResultsValid).to.be.a('function');
    });

    it('should calculate dividends if results are valid', () => {
      const store = mockStore({
        currentResults: { value: 'R:2:3:1' },
        commissions: {
          W: 15,
          P: 12,
          E: 18,
          Q: 18
        },
        bets: validBetsState
      });
      store.dispatch(calculateDividendsIfResultsValid());
      const dispatchedActions = store.getActions();
      const { type, payload } = dispatchedActions[0];
      expect(type).to.equal(RECEIVE_DIVIDENDS);
      expect(payload).to.be.an('array');
      expect(payload[0]).to.equal('Win - Runner 2 - $2.61');
      expect(payload[1]).to.equal('Place - Runner 2 - $1.06');
      expect(payload[2]).to.equal('Place - Runner 3 - $1.27');
      expect(payload[3]).to.equal('Place - Runner 1 - $2.13');
      expect(payload[4]).to.equal('Exact - Runners 2,3 - $2.43');
      expect(payload[5]).to.equal('Quinella - Runners 2,3 - $2.18');
    });

    it('should not calculate dividends if results invalid', () => {
      const store = mockStore({
        currentResults: { value: 'R:2:3' },
        commissions: {
          W: 15,
          P: 12,
          E: 18,
          Q: 18
        },
        bets: validBetsState
      });
      store.dispatch(calculateDividendsIfResultsValid());
      const dispatchedActions = store.getActions();
      const firstAction = dispatchedActions[0];
      expect(firstAction.type).to.equal(RECEIVE_RESULTS_ERROR);
      expect(firstAction.payload).to.equal(resultsPatternError);
    });
  });
});
