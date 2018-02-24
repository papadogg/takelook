import React from 'react';
import PropTypes from 'prop-types';

const StudiosItem = ({
  name, price, view, params,
}) => (
  <div>
    <h4>{name}</h4>
    <img src={view} alt={name} />
    <p>{price}</p>
  </div>
);

StudiosItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  view: PropTypes.array,
  params: PropTypes.array,
};

export default StudiosItem;
