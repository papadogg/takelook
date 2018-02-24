import React from 'react';
import PropTypes from 'prop-types';
import StudiosItem from './StudiosItem';

const StudiosList = ({ studios }) => {
  const studiosList = studios.map(studio => <StudiosItem key={studio.id} {...studio} />);
  return <div>{studiosList}</div>;
};

StudiosList.propTypes = {
  studios: PropTypes.array,
};

export default StudiosList;
