import React, { Component } from 'react';
import studiosData from '../data/studios.json';
import StudiosList from './StudiosList';
import PriceFilter from './PriceFilter';

class App extends Component {
  state = {
    priceRange: [],
  };

  setPriceRange = (priceRange) => {
    this.setState({
      priceRange,
    });
  };

  filterStudios = () => {
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

  render() {
    const { studios } = studiosData;
    return (
      <div>
        {studios ? (
          <React.Fragment>
            <PriceFilter studios={studios} setPriceRange={this.setPriceRange} />
            <StudiosList studios={this.filterStudios()} />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default App;
