import React, { PropTypes } from 'react';
import { receiveCurrentResults } from '../actions/currentResults';
import { calculateDividendsIfResultsValid } from '../actions/dividends';
import SingleInputForm from './SingleInputForm';
import { calculateText, resultsPattern, resultsTitle } from '../constants/messages';

const handleSubmit = (event, dispatch) => {
  event.preventDefault();
  dispatch(calculateDividendsIfResultsValid());
};

const Results = ({ currentResults = {}, dispatch }) =>
  <section className="m-b-3">
    <h2 className="text-xs-center">{resultsTitle}</h2>
    <SingleInputForm
      {...currentResults}
      buttonText={calculateText}
      placeholder={resultsPattern}
      handleSubmit={event => handleSubmit(event, dispatch)}
      handleChange={value => dispatch(receiveCurrentResults(value))}
    />
    <div className="clearfix"></div>
  </section>;


Results.propTypes = {
  currentResults: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
export default Results;
