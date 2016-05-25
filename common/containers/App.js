import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const App = () =>
  <div>
    <Link className="btn btn-primary" to={{ pathname: '/play'}} >
      Play
    </Link>
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
