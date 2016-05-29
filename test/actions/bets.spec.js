/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addBetIfValid, receiveBet } from '../../common/actions/bets';
import { RECEIVE_BET, RECEIVE_CURRENT_BET, RECEIVE_BET_ERROR } from '../../common/constants/actionTypes';
import { validBetsMock, inValidBetsMock } from '../mocks/betsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('betsActions', () => {
  describe('receiveBet action', () => {
    it('factory should exist', () => {
      expect(receiveBet).to.be.a('function');
    });

    it('should create RECEIVE_BET action', () => {
      const receiveBetAction = receiveBet('something');
      expect(receiveBetAction.type).to.equal(RECEIVE_BET);
      expect(receiveBetAction.payload).to.equal('something');
    });
  });

  describe('addBetIfValid action', () => {
    it('factory should exist', () => {
      expect(addBetIfValid).to.be.a('function');
    });

    it('should add bets if valid', () => {
      const store = mockStore({});
      validBetsMock.map(validBet => store.dispatch(addBetIfValid(validBet)));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(RECEIVE_CURRENT_BET);
      expect(dispatchedActions[0].payload).to.be.undefined;
      expect(dispatchedActions[1].type).to.equal(RECEIVE_BET);
      expect(dispatchedActions[1].payload).to.be.an('object');
      expect(dispatchedActions).to.have.length(validBetsMock.length * 2);
    });

    it('should not add bets if invalid', () => {
      const store = mockStore({});
      inValidBetsMock.map(invalidBet => store.dispatch(addBetIfValid(invalidBet)));
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).to.equal(RECEIVE_BET_ERROR);
      expect(dispatchedActions[0].payload).to.be.a('string');
      expect(dispatchedActions).to.have.length(inValidBetsMock.length);
    });
  });
});
