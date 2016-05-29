import React, { PropTypes } from 'react';
import BetTable from './BetTable';
import { betNames } from '../constants/bets';
import { currentBetsTitle } from '../constants/messages';

const Bets = ({ bets }) =>
  <section className="m-b-2 row">
    <h2 className="text-xs-center">{currentBetsTitle}</h2>
    {Object.keys(betNames).map(betKey =>
      <div className="col-sm-6 col-lg-3">
        <BetTable key={betKey} { ...bets[betKey] } title={betNames[betKey]} />
      </div>
    )}
    <div className="clearfix"></div>
  </section>;


Bets.propTypes = {
  bets: PropTypes.object
};

export default Bets;
