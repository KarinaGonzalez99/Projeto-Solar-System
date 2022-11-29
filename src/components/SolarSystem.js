import React, { Component } from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {
          planets.map(({ name, image }) => (<PlanetCard
            key={ image }
            planetName={ name }
            planetImage={ image }
          />))
        }
      </>
    );
  }
}

export default SolarSystem;
