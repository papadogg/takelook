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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  view: PropTypes.array.isRequired,
  params: PropTypes.array.isRequired,
};

export default StudiosItem;
