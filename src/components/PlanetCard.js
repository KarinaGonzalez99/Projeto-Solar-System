import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <>
        <h3 data-testid="planet-name">{planetName}</h3>
        <div data-testid="planet-card">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
