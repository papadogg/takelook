import React from 'react';
import PropTypes from 'prop-types';
import StudiosItem from './StudiosItem';

const StudiosList = ({ studios }) => {
  const studiosList = studios
    .sort((a, b) => a.price - b.price)
    .map(studio => <StudiosItem key={studio.id} {...studio} />);
  studiosList.push(<div key="asd" className="studios-item" />);
  studiosList.push(<div key="zxc" className="studios-item" />);
  return <div className="studios-list">{studiosList}</div>;
};

StudiosList.propTypes = {
  studios: PropTypes.array.isRequired,
};

export default StudiosList;
