import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddBet from '../components/AddBet';

const Play = ({ dispatch, currentBet }) =>
  <div>
    <AddBet currentBet={currentBet} dispatch={dispatch} />
  </div>;

Play.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bets: PropTypes.object,
  currentBet: PropTypes.object
};

function mapStateToProps(state) {
  const { bets, currentBet } = state;
  return {
    bets,
    currentBet
  };
}

export default connect(mapStateToProps)(Play);
