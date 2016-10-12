import React from 'react';
import { HOC as hoc } from 'formsy-react';

import OCCitySearch from './oc_city_search.js';

const _renderSelectedLocation = (location) => {
  return (
    <div>
      <strong>Selected City:</strong>
      <div>{location || 'None'}</div>
    </div>
  );
};

const OCFormsyCitySearch = ({
  getValue,
  getErrorMessage,
  setValue,
  ...rest,
}) => (
  <div>
    <OCCitySearch
      {...rest}
      value={getValue() ? getValue().fullAddress : undefined}
      errorText={getErrorMessage()}
      onLocationSelected={(selected) => setValue(selected)}
    />
    {
      getValue()
      ? _renderSelectedLocation(getValue().text)
      : _renderSelectedLocation(undefined)
    }
  </div>
);

OCFormsyCitySearch.propTypes = {
  setValue: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  getErrorMessage: React.PropTypes.func.isRequired,
};

export default hoc(OCFormsyCitySearch);
