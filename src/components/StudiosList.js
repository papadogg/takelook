import React from 'react';
import PropTypes from 'prop-types';
import StudiosItem from './StudiosItem';

const StudiosList = ({ studios }) => {
  const studiosList = studios
    .sort((a, b) => a.price - b.price)
    .map(studio => <StudiosItem key={studio.id} {...studio} />);
  return <div>{studiosList}</div>;
};

StudiosList.propTypes = {
  studios: PropTypes.array.isRequired,
};

export default StudiosList;
