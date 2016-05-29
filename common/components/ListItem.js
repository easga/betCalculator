import React, { PropTypes } from 'react';

const ListItem = ({ value }) => <li className="list-group-item">{value}</li>;

ListItem.propTypes = {
  value: PropTypes.string
};

export default ListItem;
