import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

const StudiosItem = ({ name, price, view }) => (
  <Card
    hoverable
    className="studios-item"
    cover={<div className="studios-image" style={{ backgroundImage: `url(${view})` }} />}
  >
    <div className="price">{price} р.</div>
    <Meta title={name} />
  </Card>
);

StudiosItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  view: PropTypes.array.isRequired,
};

export default StudiosItem;
