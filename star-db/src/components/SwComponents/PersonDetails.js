import React from 'react';

import { withSwapiService } from '../HOCHelpers';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
