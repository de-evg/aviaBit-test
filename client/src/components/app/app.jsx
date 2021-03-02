import React from 'react';
import {generateFlights} from '../../mock/flights';

const App = () => {
  const flights = generateFlights();
  console.log(flights);
  return <p>111</p>
};

export default App;
