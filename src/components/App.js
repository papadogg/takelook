import React, { Component } from 'react';
import { Row, Col } from 'antd';
import studiosData from '../data/studios.json';
import StudiosList from './StudiosList';
import PriceFilter from './PriceFilter';
import Search from './Search';

class App extends Component {
  state = {
    priceRange: [],
    types: [],
  };

  setPriceRange = (priceRange) => {
    this.setState({
      priceRange,
    });
  };

  filterByPrice = () => {
    const { studios } = studiosData;
    const { priceRange } = this.state;
    if (priceRange.length === 0) {
      return studios;
    }
    return studios.filter((studio) => {
      if (studio.price >= priceRange[0] && studio.price <= priceRange[1]) {
        return studio;
      }
    });
  };

  filterByValues = () => {
    const studios = this.filterByPrice();
    const { types } = this.state;
    if (types.length === 0) {
      return studios;
    }
    const filteredStudios = [];
    studios.forEach((studio) => {
      studio.params.forEach((param) => {
        if (types.includes(param) && !filteredStudios.includes(studio)) {
          filteredStudios.push(studio);
        }
      });
    });
    return filteredStudios;
  };

  setTypes = (types) => {
    this.setState({
      types,
    });
  };

  render() {
    const { studios } = studiosData;
    return (
      <div className="contanier">
        <header>
          <img src="https://128121.selcdn.ru/react/logo.png" alt="logo" />
        </header>
        {studios ? (
          <Row gutter={16} type="flex">
            <Col
              xs={{ span: 24, order: 2 }}
              lg={{ span: 18, order: 1 }}
              style={{ paddingTop: '20px' }}
            >
              <StudiosList studios={this.filterByValues()} />
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              lg={{ span: 6, order: 2 }}
              style={{ paddingTop: '20px' }}
            >
              <Search studios={studios} setTypes={this.setTypes} />
              <PriceFilter studios={studios} setPriceRange={this.setPriceRange} />
            </Col>
          </Row>
        ) : null}
      </div>
    );
  }
}

export default App;
