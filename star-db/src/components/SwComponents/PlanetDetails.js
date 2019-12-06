import React from 'react';

import { withSwapiService } from '../HOCHelpers';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
