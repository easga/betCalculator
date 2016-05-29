import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { appTitle, appDescription, playText } from '../constants/messages';

const App = () =>
  <div className="container-fluid">
    <div className="card col-md-6 col-md-offset-3 m-t-2 p-a-2">
      <h1 className="text-xs-center">{appTitle}</h1>
      <p>{appDescription}</p>
      <div className="card-footer text-xs-center">
        <Link className="btn btn-primary" to={{ pathname: '/play' }} >
          {playText}
        </Link>
      </div>
    </div>

  </div>;

App.propTypes = {
  bets: PropTypes.object
};

function mapStateToProps(state) {
  const { bets } = state;
  return {
    bets
  };
}

export default connect(mapStateToProps)(App);
