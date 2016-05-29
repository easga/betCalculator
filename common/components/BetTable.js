import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { totalStakesTitle } from '../constants/messages';

const BetTable = ({ title, bets, totalStakes }) =>
  <div className="card p-x-1">
    <h4 className="card-header" >{title}</h4>
    <ul className="list-group">
      {bets ? bets.map((bet, index) => <ListItem key={index} value={bet.value} />) : null}
    </ul>
    {totalStakes ? <div className="card-footer">{`${totalStakesTitle}: ${totalStakes}`}</div> : null}
  </div>;


BetTable.propTypes = {
  title: PropTypes.string,
  bets: PropTypes.array,
  totalStakes: PropTypes.number
};

export default BetTable;
