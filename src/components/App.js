import React, { Component } from 'react';
import studios from '../data/studios.json';
import StudiosList from './StudiosList';

class App extends Component {
  render() {
    return (
      <div>
        <StudiosList studios={studios.studios} />
      </div>
    );
  }
}

export default App;
