import { handleActions } from 'redux-actions';
import { RECEIVE_COMMISSION } from '../constants/actionTypes';

const receiveCommission = (state, { payload: { type, value } }) => (
  {
    ...state,
    [type]: value
  }
);

export default handleActions({
  [RECEIVE_COMMISSION]: receiveCommission
}, {});
