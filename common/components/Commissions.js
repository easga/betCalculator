import React, { PropTypes } from 'react';
import CommissionBox from './CommissionBox';
import { commissionsTitle, commissionsRule } from '../constants/messages';

const Commissions = ({ dispatch, commissions }) =>
  <section className="m-b-2 row">
    <h2 className="text-xs-center">{commissionsTitle}</h2>
    <form className="col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
      <div className="text-xs-center">{commissionsRule}</div>
     {Object.keys(commissions).map(key => <CommissionBox key={key} value={commissions[key]} type={key} dispatch={dispatch} />)}
    </form>
  </section>;


Commissions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  commissions: PropTypes.object
};

export default Commissions;
