import React from 'react';
import { Slider } from 'antd';
import PropTypes from 'prop-types';

class PriceFilter extends React.Component {
  static propTypes = {
    studios: PropTypes.array.isRequired,
    setPriceRange: PropTypes.func.isRequired,
  };

  min = this.calculateStartValues().min;
  max = this.calculateStartValues().max;

  calculateStartValues() {
    const prices = this.props.studios.map(studio => studio.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return {
      min,
      max,
    };
  }

  state = {
    priceRange: [this.min, this.max],
  };

  changeHandler = (priceRange) => {
    this.setState({
      priceRange,
    });
  };

  setPrice = (priceRange) => {
    this.props.setPriceRange(priceRange);
  };

  render() {
    const { priceRange } = this.state;
    return (
      <div>
        <Slider
          range
          step={10}
          min={this.min}
          max={this.max}
          value={priceRange}
          tipFormatter={null}
          onAfterChange={this.setPrice}
          onChange={this.changeHandler}
        />
        <div>
          Стоимость <span>{priceRange[0]}</span> - <span>{priceRange[1]}</span>
        </div>
      </div>
    );
  }
}

export default PriceFilter;
