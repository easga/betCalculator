import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import { dividendsTitle, dividendsFooter } from '../constants/messages';

const Dividends = ({ dividends }) =>
  <section className="m-b-2 c">
    <div className="card col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
      <h4 className="card-header" >{dividendsTitle}</h4>
      <ul className="list-group">
        {dividends.map((value, index) => <ListItem key={index} value={value} />)}
      </ul>
      <div className="card-footer">
        <h4 className="text-xs-center">{dividendsFooter}</h4>
        <img
          alt="dollar"
          className="img-responsive"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/United_States_one_dollar_bill,_reverse.jpg"
        />
      </div>
    </div>
  </section>;


Dividends.propTypes = {
  dividends: PropTypes.array
};

export default Dividends;
