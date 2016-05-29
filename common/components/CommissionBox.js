import React, { PropTypes } from 'react';
import NumberInput from 'react-number-input';
import { receiveCommission } from '../actions/commissions';
import { betNames } from '../constants/bets';

const CommissionBox = ({ dispatch, value, type }) =>
  <fieldset className="form-group">
    <label htmlFor={type}>{betNames[type]}</label>
    <NumberInput
      onBlur={event => dispatch(receiveCommission({ type, value: parseInt(event.target.value) }))}
      type="number"
      min={1}
      max={50}
      value={value}
      className="form-control"
      id={type}
      placeholder="Set commission"
      required
    />
  </fieldset>;

CommissionBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.number,
  type: PropTypes.string
};

export default CommissionBox;
