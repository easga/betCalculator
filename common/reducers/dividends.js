import { handleActions } from 'redux-actions';
import { RECEIVE_DIVIDENDS } from '../constants/actionTypes';

const receiveDividents = (state, { payload }) => payload;

export default handleActions({
  [RECEIVE_DIVIDENDS]: receiveDividents
}, []);
