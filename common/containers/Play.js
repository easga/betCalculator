import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { appWelcome } from '../constants/messages';
import AddBet from '../components/AddBet';
import Bets from '../components/Bets';
import Commissions from '../components/Commissions';
import Results from '../components/Results';
import Dividends from '../components/Dividends';
import { isEmpty } from '../utils/commons';

const Play = ({ dispatch, currentBet, bets, commissions, currentResults, dividends }) =>
  <div className="container-fluid">
    <h1 className="text-xs-center p-y-2">{appWelcome}</h1>
    <AddBet currentBet={currentBet} dispatch={dispatch} />
    {!isEmpty(bets) ? <Bets bets={bets} /> : null}
    {!isEmpty(bets) ? <Commissions commissions={commissions} dispatch={dispatch} /> : null}
    {!isEmpty(bets) ? <Results currentResults={currentResults} dispatch={dispatch} /> : null}
    {!isEmpty(dividends) ? <Dividends dividends={dividends} /> : null}
  </div>;

Play.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bets: PropTypes.object,
  dividends: PropTypes.array,
  commissions: PropTypes.object,
  currentBet: PropTypes.object,
  currentResults: PropTypes.object,
};

function mapStateToProps(state) {
  const { bets, currentBet, commissions, currentResults, dividends } = state;
  return {
    bets,
    currentBet,
    commissions,
    currentResults,
    dividends
  };
}

export default connect(mapStateToProps)(Play);
